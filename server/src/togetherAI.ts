// togetherClient.ts
import Together from "together-ai";
import { systemprompt } from "./systemprompt";

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

export async function ReplyTogetherAI(input: string){
  const response = await together.chat.completions.create({
    model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
    messages: [
      { role: "system", content: systemprompt },
      { role: "user", content: input }
    ],
    max_tokens: 505,
    temperature: 0.2,
    top_p: 0.7,
    top_k: 40,
    stream: false
  });

  const reply= response.choices?.[0]?.message?.content ?? "";
  const model='togetherAI, deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free'
  return{reply,model}
}


// const res = await fetch("https://api.together.xyz/v1/chat/completions", {
//   method: "POST",
//   headers: {
//     "Authorization": `Bearer ${process.env.TOGETHER_API_KEY}`,
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
//     messages: [
//       { role: "system", content: "You are helpful" },
//       { role: "user", content: "Tell me about soil nutrients" }
//     ],
//     temperature: 0.2,
//     top_p: 0.7
//   })
// });
// const data = await res.json();
