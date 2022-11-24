import jwt from "jsonwebtoken";
import { Router, Response, Request, NextFunction } from "express";

function loginRequired(req:Request,res: Response, next: NextFunction) {
  // request 헤더로부터 authorization bearer 토큰을 받음.
  const accessToken  = req.headers["authorization"]?.split(" ")[1] ?? "null";

  // 이 토큰은 jwt 토큰 문자열이거나, 혹은 "null" 문자열임.
  // 토큰이 "null" 일 경우, loginRequired 가 필요한 서비스 사용을 제한함.
  if (accessToken  === "null") {
    console.log("accessToken이 null");
    res.status(400).send("accessToken이 null");
    return;
  }

  // 해당 token 이 정상적인 token인지 확인 -> 토큰에 담긴 user_id 정보 추출
  try {
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const jwtDecoded = jwt.verify(accessToken, secretKey);
    const userId = jwtDecoded.userId;
    req.headers["currentUserId"] = userId;
    next();
  } catch (error) {
    res.status(400).send("정상적인 토큰이 아닙니다. 다시 한 번 확인해 주세요.");
    return;
  }
}

export { loginRequired };
