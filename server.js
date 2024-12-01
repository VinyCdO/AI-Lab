import express from "express";
import routes from "./src/routes/chatbotConversationRoutes.js";

// Cria uma instância do servidor Express
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(7000, () => {
  console.log("Server listening...");
});
