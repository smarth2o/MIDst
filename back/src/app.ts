import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/index";

import errorMiddleware from "middlewares/errorMiddleware";

export const app = express();

app.use(morgan("dev"));

app.use(
    cors({
        origin: "http://localhost:3000", // 접근 권한을 부여하는 도메인
        credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
        optionsSuccessStatus: 200, // 응답 상태 200으로 설정
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorMiddleware);
