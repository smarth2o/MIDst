import express from "express";
import path from "path";
import cors from "cors";
import diaryRouter from "./routes/diaryRouter";
import communityRouter from "routes/communityRouter";
import likeRouter from "routes/likeRouter";
import replyRouter from "routes/replyRouter";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", diaryRouter);
app.use("/", communityRouter);
app.use("/", likeRouter);
app.use("/", replyRouter);
