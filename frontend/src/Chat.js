import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function Chat() {
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    try {
      const res = await fetch("http://localhost:8000/api/send/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user,
          text: msg
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "user",
          content: msg,
        },
        data
      ]);

      setMsg("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      // Não precisa de nada aqui, imagem já está no body via index.html
    }}>
      <div style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 32,
        background: "rgba(25, 28, 41, 0.25)", // fundo transparente escuro
        borderRadius: 10,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: 40,
          fontWeight: "bold",
          color: "#ffffffff",
          marginBottom: 35
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
              background: m.sender === "user" ? "rgba(231,243,255,0.6)" : "rgba(245,246,250,0.6)",
              padding: 14,
              marginBottom: 12,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              color: "#222"
            }}
          >
            <b style={{ color: "#000000ff" }}>
              {m.sender === "user" ? `Você (${user})` : "Bot:"}
            </b>
            {" "}
            {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
