import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET_KEY;

const TokenSetting = {
    accessToken: "1h",
    refreshToken: "14d",
};

export const generateToken = (
    payload: { userId: string },
    tokenType: string
) => {
    return jwt.sign(payload, secret, {
        algorithm: "HS256",
        expiresIn: TokenSetting[tokenType],
    });
};
export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, secret);
        return {
            ok: true,
            decoded,
        };
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return null;
        }
    }
};
