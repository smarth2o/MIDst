import express from "express";
import path from "path";
import cors from "cors";
import { router } from "./routes/index";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(
  "/doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { explorer: true })
);
