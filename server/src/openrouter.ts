import { systemprompt } from "./systemprompt";
import dotenv from "dotenv";
dotenv.config();
export async function ReplyOpenrouter(input:string){
const response = await 
    fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": process.env.OPENROUTER_API_KEY||'',
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "deepseek/deepseek-r1-0528:free",
    "messages": [
       {
      "role": "system",
      "content": systemprompt
    },
      {
        "role": "user",
        "content": input
      }
    ]
  })
});
    const data = await response.json();
    console.log(data)
    const reply = data.choices[0].message.content;
    const model='openrouterai, deepseek/deepseek-r1-0528:free'
  return {reply,model}}