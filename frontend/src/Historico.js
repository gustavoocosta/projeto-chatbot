import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

function Historico() {
  const { user } = useContext(UserContext);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/history/${user}/`)
      .then((res) => setHistorico(res.data))
      .catch((err) => console.error("Erro ao carregar histórico:", err));
  }, [user]);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "#fff" }}>Histórico do usuário A</h2>


      {historico.map((m) => (
        <div
          key={m.id}
          style={{
            background: m.sender === "user" ? "#e7f3ff" : "#f5f6fa",
            padding: 12,
            marginBottom: 12,
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(255, 255, 255, 0.05)",
          }}
        >
          <b style={{ color: m.sender === "user" ? "#000000ff" : "#1e90ff" }}>
            {m.sender === "user" ? `Você (${user})` : "Bot"}
          </b>
          : {m.content}
        </div>
      ))}
    </div>
  );
}

export default Historico;
