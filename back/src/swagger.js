const swaggerAutogen = require("swagger-autogen")();

const options = {
    info: {
        title: "6dan",
        description: "6dan api명세",
    },
    host: "localhost:8080",
    servers: [
        {
            url: "http://localhost:8080",
        },
    ],
    schemes: ["http"],
    securityDefinitions: {
        jwt: {
            type: "apiKey",
            name: "authorization",
            in: "header",
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, options);
