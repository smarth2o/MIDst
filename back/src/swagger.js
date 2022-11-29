const swaggerAutogen = require("swagger-autogen")();

const options = {
  info: {
    title: "6dan",
    description: "6dan api명세",
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],
  schemes: ["http"],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      in: "header",
      bearerFormat: "JWT",
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, options);
