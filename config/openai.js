import { OpenAI } from 'openai';

const openai = new OpenAI ({
    apiKey: process.env.OPENAI_KEY, 
    model: "gpt-4",                    
    temperature: 0.7,                   
    max_tokens: 2000,                   
    top_p: 1,                           
    frequency_penalty: 0,               
    presence_penalty: 0
});

export async function messageToAI ( messages ) {
    try {
        const response = await openai.chat.completions.create({
          messages, 
          model: 'gpt-4', 
        });
        return response.choices[0].message.content;
      } catch (error) {
        console.error("Error al comunicar con OpenAI:", error);
        throw error;
    }
    
}