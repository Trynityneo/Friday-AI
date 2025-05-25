import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('Missing VITE_GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Initialize the model - using gemini-2.0-flash as specified by the user
export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const generateResponse = async (prompt: string, history: Array<{role: string, parts: string}>) => {
  try {
    // Format the chat history
    const chat = model.startChat({
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts }],
      })),
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the message and get the response
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Sorry, I encountered an error while processing your request.';
  }
};
