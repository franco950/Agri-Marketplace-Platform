// chat.tsx
import { useEffect, useState } from "react";
import AppMessaging from "./appmessaging";
import "./chat.css";
import { useAuth } from "./context/useauth";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
const url=import.meta.env.VITE_SERVER_URL

interface User {
  id: string;
  firstname: string;
}

export default function Chat() {
  const location = useLocation();
 const newchatuserid=(location.state as { otherUserId?: string })?.otherUserId;
 console.log(newchatuserid)
 const userid=useAuth()
 const currentUserId=userid
  const [chats, setChats] = useState<User[]>([]);
  const [activeChatUser, setActiveChatUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${url}/chatHeaders`, {
       method: "POST",
       headers: {"Content-Type": "application/json",},
       credentials:'include',
    })
      .then((res) => res.json())
      .then((data) => setChats(data))
      .catch((err) => console.error("Failed to load chats:", err));
  }, [currentUserId]);
 
  return (
    <div className="full-container">
          <Navbar />
          
    <div className="chat-wrapper">
      <div className="chat-list">
        <h3>Your Chats</h3>
        {chats.length>0&&chats.map((user) => (
          <div
            key={user.id}
            className={`chat-user ${activeChatUser?.id === user.id ? "active" : ""}`}
            onClick={() => setActiveChatUser(user)}
          >
            {user.firstname}
          </div>
        ))}
      </div>

      <div className="chat-window">
        {(newchatuserid || activeChatUser) ? (
          <AppMessaging
            otherUserId={newchatuserid || activeChatUser?.id}
          />
        ) : (
          <p className="placeholder">Select a chat to start messaging</p>
        )}

      </div>
    </div>
    </div>
  );
}
