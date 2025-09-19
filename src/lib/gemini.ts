import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC34Vn4r4b3jyEVJDhVwiyhGaSCXWTpaKQ";
const genAI = new GoogleGenerativeAI(API_KEY);

// Translation service: Any language → English → Tamil with pronunciation
export async function translateText(text: string, fromLanguage: string = "auto") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
    You are a Tamil language learning assistant. Please help with this translation:

    1. First, translate "${text}" from ${fromLanguage} to English
    2. Then translate the English to Tamil
    3. Provide the Tamil pronunciation in English letters (like "vanakkam" for வணக்கம்)
    4. Give the meaning/context

    Format your response as:
    **Original:** ${text}
    **English:** [English translation]
    **Tamil:** [Tamil script]
    **Pronunciation:** [English pronunciation]
    **Meaning:** [Brief explanation of meaning/context]

    Keep it conversational and helpful for language learning.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Translation error:", error);
    return "Sorry, I couldn't translate that. Please try again.";
  }
}

// Chat assistant for Tamil learning
export async function chatWithAssistant(message: string, context: string = "") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
    You are "Vanakkam Tamil Assistant", a friendly and encouraging Tamil language learning chatbot. 

    Context: ${context}
    User message: ${message}

    Guidelines:
    - Always be encouraging and supportive
    - Provide Tamil words with English pronunciation in parentheses
    - Break down complex concepts into simple steps
    - Use examples from Tamil culture when relevant
    - For any Tamil text, always provide English pronunciation
    - Format responses clearly with line breaks, not paragraphs
    - Use emojis appropriately to make learning fun
    - If user writes in another language, respond with Tamil translation and pronunciation

    Respond helpfully to the user's message about learning Tamil.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Chat error:", error);
    return "Sorry, I'm having trouble right now. Please try again! 😊";
  }
}

// Generate lesson content
export async function generateLesson(topic: string, level: string = "beginner") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
    Create a Tamil lesson about "${topic}" for ${level} level learners.
    
    Include:
    1. 5-7 key vocabulary words with Tamil script and pronunciation
    2. 2-3 example sentences
    3. Cultural context or interesting facts
    4. Practice exercises (fill in the blank, matching, etc.)
    
    Format clearly with headings and make it engaging for gamified learning.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Lesson generation error:", error);
    return "Sorry, I couldn't generate the lesson. Please try again.";
  }
}