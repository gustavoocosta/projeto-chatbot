import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function Chat() {
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!msg.trim()) return;
    // Simule ou conecte com seu backend
    setMessages([...messages, { id: Date.now(), content: msg, response: "Recebi sua mensagem!" }]);
    setMsg("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(90deg,#e0eaff,#ffffff 70%)"
    }}>
      <div style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 32,
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          color: "#1e90ff",
          marginBottom: 28
        }}>Chatbot Simulado</h2>

        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          <input
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: 6,
              border: "1px solid #bbb",
              fontSize: 16
            }}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button
            style={{
              padding: "10px 18px",
              borderRadius: 6,
              border: "none",
              background: "#1e90ff",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 16
            }}
            onClick={sendMessage}
          >Enviar</button>
        </div>

        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              background: "#f5f6fa",
              padding: 14,
              marginBottom: 12,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
            }}
          >
            <b style={{ color: "#1e90ff" }}>Você ({user}):</b> {m.content}
            <br />
            <b style={{ color: "#2daa59" }}>Resposta:</b> {m.response}
          </div>
        ))}

        <h3 style={{
          marginTop: 40,
          fontWeight: 600,
          color: "#222"
        }}>Histórico do usuário {user}</h3>
      </div>
    </div>
  );
}

export default Chat;
