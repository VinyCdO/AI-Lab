import { gerarRespostaChatGemini } from "../services/geminiService.js";
import { gerarRespostaChatGpt } from "../services/gptService.js";
import { gerarRepostaChatBotpress } from "../services/botpressService.js";

export async function getChatResponseGemini(req, res) {
  const prompt = req.body.prompt;

  const chatResponse = await gerarRespostaChatGemini(prompt);

  res.status(200).json(chatResponse);  
}

export async function getChatResponseGpt(req, res) {
  const prompt = req.body.prompt;

  const chatResponse = await gerarRespostaChatGpt(prompt);

  res.status(200).json(chatResponse);  
}

export async function getChatResponseBotpress(req, res) {
  const prompt = req.body.prompt;

  const chatResponse = await gerarRepostaChatBotpress(prompt);

  res.status(200).json(chatResponse);  
}

export async function generateGptGeminiConversation(req, res) {
  let prompt = req.body.prompt;
  let gptResponse = "";
  let geminiResponse = "";

  console.log("Início conversação: ");
  console.log(prompt);

  let count = 1;

  while (count <= 10) {

    prompt = prompt;

    if (count % 2 === 0) {
      console.log("Chat GPT: ");
      gptResponse = await gerarRespostaChatGpt(prompt);
      prompt = gptResponse;
    } else {
      console.log("Gemini AI: ");
      geminiResponse = await gerarRespostaChatGemini(prompt);
      prompt = geminiResponse;
    }

    console.log(prompt);
    count++;
  }
  
  res.status(200).json();  
}
