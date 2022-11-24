import express from "express";
import path from "path";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  return res.json({ msg: "Hello world" });
});

app.use(userRouter);
