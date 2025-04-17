import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API GPT Service",
            version: "1.0.0",
            description: "Documentação da API para o serviço GPT",
        },
        servers: [
            {
                url: "http://localhost:7000", 
            },
        ],
    },
    apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}