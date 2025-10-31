import { GoogleGenAI } from "@google/genai";

// Fix: Implement Gemini API call to replace mock response.
// Initialize the Google GenAI client. API key is handled by environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Generates a response from the Gemini API.
 * @param prompt The user's prompt.
 * @param systemInstruction The system instruction for the model.
 * @returns The generated text from the model.
 */
export const generateGeminiResponse = async (prompt: string, systemInstruction: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      // Use gemini-2.5-flash for balanced performance and capability.
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating response from Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while calling Gemini API.");
  }
};
