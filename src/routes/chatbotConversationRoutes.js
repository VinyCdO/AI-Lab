import express from "express";
import { getChatResponseGemini, getChatResponseGpt, generateGptGeminiConversation } from "../controllers/chatbotConversationController.js";

const routes = (app) => {
  app.use(express.json());
  /**
   * @swagger
   * /generateAIConversation/:
   *   post:
   *     summary: Generate a conversation between GPT and Gemini AI.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               prompt:
   *                 type: string
   *                 description: The initial prompt to start the conversation.
   *                 example: "Olá, vamos conversar?"
   *     responses:
   *       200:
   *         description: Successfully generated conversation.
   *       500:
   *         description: Internal server error.
   */  
  app.get("/geminiChat/", getChatResponseGemini);
  app.get("/gptChat/", getChatResponseGpt);
  app.post("/generateAIConversation/", generateGptGeminiConversation)
}

export default routes;