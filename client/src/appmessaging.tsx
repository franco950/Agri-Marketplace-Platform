// appmessaging.tsx
import { useEffect, useState } from "react";
import "./appmessaging.css";
import { socket } from "./socket"; 
import { useAuth } from "./context/useauth";
import { useLocation } from "react-router-dom";
const url=import.meta.env.VITE_SERVER_URL

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
}


interface AppMessagingProps {
  otherUserId?: string;
}

export default function AppMessaging({ otherUserId }: AppMessagingProps){
  const location = useLocation();
   const effectiveUserId = 
    otherUserId || 
    (location.state as { otherUserId?: string })?.otherUserId;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const {userid}=useAuth()
  const userId=userid
useEffect(() => {
  socket.connect();
  socket.emit("join", userId);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${url}/getMesssages?user2=${effectiveUserId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };

  if (effectiveUserId) fetchMessages();

  socket.on("receive_message", (message: Message) => {
    if (
      (message.senderId === effectiveUserId && message.receiverId === userId) ||
      (message.senderId === userId && message.receiverId === effectiveUserId)
    ) {
      setMessages((prev) => [...prev, message]);
    }
  });

  return () => {
    socket.disconnect();
    socket.off("receive_message");
  };
}, [userId, effectiveUserId]);


  const sendMessage = async () => {
    if (!newMessage.trim()|| !userId || !effectiveUserId) return;
    try {
      socket.emit("send_message", {
        senderId: userId,
        receiverId: effectiveUserId,
        content: newMessage,
      });
      setNewMessage("");
    } catch (error) {
      console.error("Message send error:", error);
    }
  };
  useEffect(() => {
  const container = document.querySelector(".messages");
  container?.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
}, [messages]);


  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.senderId === userId ? "sent" : "received"}`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
