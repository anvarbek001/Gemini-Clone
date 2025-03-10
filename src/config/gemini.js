/** @format */

// const apiKey = "AIzaSyAC8w4JTiowTDWJnQIco1IJekkv2DpgM4g";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAC8w4JTiowTDWJnQIco1IJekkv2DpgM4g";
const genAI = new GoogleGenerativeAI("AIzaSyAC8w4JTiowTDWJnQIco1IJekkv2DpgM4g");

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text(); 
}

export default run;
