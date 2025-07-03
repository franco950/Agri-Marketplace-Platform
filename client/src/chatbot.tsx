import  { useState, useRef, useEffect } from "react";
import "./chatbot.css"; 
const url=import.meta.env.VITE_SERVER_URL
function extractUserMessage(rawResponse: string): string {
  if (!rawResponse) return "";

  // Remove the <think>...</think> section (including the tags themselves)
  const withoutThink = rawResponse.replace(/<think>[\s\S]*?<\/think>/i, "");

  // Optional: remove leading 🤖 emoji and extra whitespace
  const cleaned = withoutThink.replace(/^\s*🤖\s*/, "").trim();

  return cleaned;
}


export default function Chatbot() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
const [isDragging, setIsDragging] = useState(false);
const [wasDragged, setWasDragged] = useState(false);


const handleTouchStart = (e: React.TouchEvent) => {
  const touch = e.touches[0];
  const shiftX = touch.clientX - position.x;
  const shiftY = touch.clientY - position.y;

  const moveAt = (event: TouchEvent) => {
    const touchMove = event.touches[0];
    setPosition({
      x: Math.max(0, Math.min(window.innerWidth - 60, touchMove.clientX - shiftX)),
      y: Math.max(0, Math.min(window.innerHeight - 60, touchMove.clientY - shiftY)),
    });
    setWasDragged(true);
  };

  const stopTouch = () => {
    setIsDragging(false);
    document.removeEventListener("touchmove", moveAt);
    document.removeEventListener("touchend", stopTouch);
  };

  setIsDragging(true);
  setWasDragged(false);

  document.addEventListener("touchmove", moveAt);
  document.addEventListener("touchend", stopTouch);
};

const startDrag = (e: React.MouseEvent) => {
  setIsDragging(true);
  setWasDragged(false); // Reset drag flag
   document.body.style.userSelect = "none";

  const shiftX = e.clientX - position.x;
  const shiftY = e.clientY - position.y;

  const moveAt = (event: MouseEvent) => {
    setPosition({
      x: Math.max(0, Math.min(window.innerWidth - 60, event.clientX - shiftX)),
      y: Math.max(0, Math.min(window.innerHeight - 60, event.clientY - shiftY)),
    });
    setWasDragged(true); // Mark as dragged
  };

  const stopDrag = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", moveAt);
    document.removeEventListener("mouseup", stopDrag);
   
    document.body.style.userSelect = "auto";


  };

  document.addEventListener("mousemove", moveAt);
  document.addEventListener("mouseup", stopDrag);
};
  const toggleChat = () => setVisible(!visible);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(`${url}/chatbot/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          
          prompt:input,
          
        }),
      });

      const data = await res.json();
      const response = data.response
      const formatted=extractUserMessage(response)


      const botMessage = {
        text: `🤖 ${formatted}`,
        sender: "bot" as const,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("LLM Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Failed to connect to chatbot.", sender: "bot" },
      ]);
    }
  };
  const handleClick = () => {
  if (!wasDragged) toggleChat();
};


  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {!visible && (
        <div
        className="chat-button"
        onMouseDown={(e) => startDrag(e)}
        onTouchStart={(e) => handleTouchStart(e)}
        onClick={handleClick}
        style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            cursor: isDragging ? 'grabbing' : 'grab',
            touchAction: 'none', // Prevent native scrolling during drag
            }}>
        💬
        </div>


      )}

      {visible && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>AgriBot</h3>
            <span className="close-btn" onClick={toggleChat}>
              ×
            </span>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
