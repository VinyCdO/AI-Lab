import express from "express";
import routes from "./src/routes/chatbotConversationRoutes.js";
import { setupSwagger } from "./src/config/swaggerConfig.js";

// Cria uma instância do servidor Express
const app = express();
routes(app);

// Configuração do Swagger
setupSwagger(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(7000, () => {
  console.log("Server listening...");
});
