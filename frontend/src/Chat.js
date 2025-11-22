import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function Chat() {
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

const sendMessage = async () => {
  if (!msg.trim()) return;

  console.log("USER ENVIADO PARA O BACKEND:", user);
  console.log("MENSAGEM ENVIADA:", msg);

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/chat/send/", {
      user,
      content: msg,
    });

    setMessages((prev) => [...prev, res.data]);
    setMsg("");
  } catch (err) {
    console.error("Erro ao enviar mensagem:", err);
  }
};

  return (
    <div style={{ marginBottom: 30 }}>
      <h3>Chat</h3>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Digite sua mensagem..."
        style={{ padding: 8, width: "60%", marginRight: 10 }}
      />

      <button type="button" onClick={sendMessage}>Enviar</button>


      <div style={{ marginTop: 20 }}>
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              background: "#eee",
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            <b>Você ({user}):</b> {m.content}
            <br />
            <b>Resposta:</b> {m.response}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
