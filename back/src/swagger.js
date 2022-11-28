const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./routes/userRouter.ts",
  "./routes/communityRouter.ts",
];

swaggerAutogen(outputFile, endpointsFiles);
