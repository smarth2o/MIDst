import { Response, Request, NextFunction } from "express";
import UserRepository from "repositories/user.repository";
import { generateToken, verifyToken } from "utils/jwt-util";

async function loginRequired(req: Request, res: Response, next: NextFunction) {
    try {
        // request header로 AT,RT 둘 다 받음.
        let accessToken: string =
            req.headers["authorization"]?.split(" ")[1] ?? null;
        let refreshToken = req.headers["refresh"] ?? null;

        //AT,RT 둘다 null
        if (accessToken === null && refreshToken === null) {
            return res
                .status(400)
                .send("no accessToken or refreshToken in header");
        }

        //AT 있음 -> 1. 유효함 -> 통과
        //       -> 2. 유효하지 않음 -> 1. RT도 없음 -> AT 만료
        //                        -> 2. RT는 있음 -> RT 검증 -> 1. RT 검증 안됨 -> RT 유효하지 않음.
        //                                                -> 2. RT 검증됨 -> AT발급 후 통과
        if (accessToken !== null) {
            const accessPayload = verifyToken(accessToken);
            //AT만료, RT 없음
            if (accessPayload === null && refreshToken === null) {
                return res.status(401).send("accessToken in expired");
            }

            //AT만료, RT 있음
            if (accessPayload === null && typeof refreshToken === "string") {
                const token = await UserRepository.checkToken(refreshToken);

                //RT 검증 안됨
                if (!token) {
                    return res.status(401).send("refreshToken is not valid");
                }
                accessToken = generateToken(
                    { userId: token.userId },
                    "accessToken"
                );
                req.headers["currentUserId"] = token.userId;
                next();
                return;
            }
            req.headers["currentUserId"] = accessPayload.decoded.userId;
        }
        next();
    } catch (error) {
        next(error);
    }
}

export { loginRequired };
