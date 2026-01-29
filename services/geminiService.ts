
import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem } from "../types";

export const getBurgerRecommendation = async (userInput: string, menu: MenuItem[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const menuContext = menu.filter(item => item.category === 'burgers').map(item => ({
    id: item.id,
    name: item.name,
    description: item.description
  }));

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Você é um sommelier de hambúrgueres gourmet. 
    Baseado no desejo do cliente: "${userInput}", 
    escolha a melhor opção deste menu: ${JSON.stringify(menuContext)}.
    Responda apenas em JSON com a estrutura solicitada.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          burgerId: { type: Type.STRING, description: 'ID do hambúrguer escolhido' },
          reasoning: { type: Type.STRING, description: 'Breve explicação persuasiva e elegante da escolha' }
        },
        required: ["burgerId", "reasoning"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse recommendation", e);
    return null;
  }
};
