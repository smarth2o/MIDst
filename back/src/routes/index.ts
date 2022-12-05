import { Router } from "express";
import userRouter from "./user.route";
import mainRouter from "./main.route";
import diaryRouter from "./diary.route";
import communityRouter from "./community.route";
import replyRouter from "./reply.route";
import likeRouter from "./like.route";

export const router: Router = Router();

router.use("/user", userRouter);
router.use("/main", mainRouter);
router.use("/diaries", diaryRouter);
router.use("/posts", communityRouter);
router.use("/replies", replyRouter);
router.use("/likes", likeRouter);
