import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/index";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json";
import errorMiddleware from "middlewares/errorMiddleware";

export const app = express();

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorMiddleware);

app.use(
    "/doc",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, { explorer: true })
);
