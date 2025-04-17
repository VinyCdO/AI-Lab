import OpenAI from "openai";
const openai = new OpenAI();

export async function gerarRespostaChatGpt(prompt) {
  
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a friendly person." },
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    return completion.choices[0].message.content;

}