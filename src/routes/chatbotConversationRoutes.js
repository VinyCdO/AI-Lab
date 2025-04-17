import express from "express";
import { getChatResponseGemini, getChatResponseGpt, generateGptGeminiConversation } from "../controllers/chatbotConversationController.js";
import { login, authenticateToken } from '../middlewares/authMiddleware.js';

const routes = (app) => {
  app.use(express.json());
    
  app.get("/geminiChat/", authenticateToken, getChatResponseGemini);
  app.get("/gptChat/", authenticateToken, getChatResponseGpt);
  
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
  app.post("/generateAIConversation/", authenticateToken, generateGptGeminiConversation)

  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Authenticate user and generate a token.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *                 description: The username of the user.
   *                 example: "user123"
   *               password:
   *                 type: string
   *                 description: The password of the user.
   *                 example: "password123"
   *     responses:
   *       200:
   *         description: Successfully authenticated user.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *                   description: The generated authentication token.
   *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   *       401:
   *         description: Unauthorized. Invalid username or password.
   *       500:
   *         description: Internal server error.
   */
  app.post("/login", login);
}

export default routes;