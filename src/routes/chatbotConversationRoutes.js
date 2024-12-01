import express from "express";
import { getChatResponseGemini, getChatResponseGpt, generateGptGeminiConversation } from "../controllers/chatbotConversationController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/geminiChat/", getChatResponseGemini);
  app.get("/gptChat/", getChatResponseGpt);
  app.get("/generateAIConversation/", generateGptGeminiConversation)
}

export default routes;