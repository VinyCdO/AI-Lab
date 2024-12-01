// import _ from 'lodash'
import * as chat from '@botpress/chat'

export async function gerarRepostaChatBotpress (prompt) {  
  /**
   * You can find your webhook id in the the Botpress Dashboard.
   * Navigate to your bot's Chat Integration configuration. Look for:
   * https://webhook.botpress.cloud/$YOUR_WEBHOOK_ID
   */
  const webhookId = process.env.WEBHOOK_ID
  if (!webhookId) {
    throw new Error('WEBHOOK_ID is required')
  }

  const apiUrl = `https://chat.botpress.cloud/${webhookId}`

  // 0. connect and create a user
  const client = await chat.Client.connect({ apiUrl });

  const { conversation } = await client.createConversation({});

  console.log(conversation.id);

  await client.createMessage({
    conversationId: conversation.id,
    payload: {
      type: 'text',
      text: prompt,
    },
  });

  const messages = await client.getConversationMessages(conversation.id); // Adaptar para o método correto da versão 0.4.2

  return messages;
  
}

