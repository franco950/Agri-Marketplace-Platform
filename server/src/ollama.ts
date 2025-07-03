export async function ReplyOllama(input:string){
    const response=await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "agrigo-assistant",
        prompt:input,
        stream: false,
      }),
    });
    const data = await response.json();
    const reply = data.choices[0].message.content;
    const model='ollama,agrigo-assistant'
    return {reply,model}}
