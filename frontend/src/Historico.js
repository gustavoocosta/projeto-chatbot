import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

function Historico() {
  const { user } = useContext(UserContext);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/chat/history/${user}/`)
      .then((res) => setHistorico(res.data))
      .catch((err) => console.error("Erro ao carregar histórico:", err));
  }, [user]);

  return (
    <div style={{ marginBottom: 30 }}>
      <h3>Histórico do usuário {user}</h3>

      <div>
        {historico.map((h) => (
          <div
            key={h.id}
            style={{
              background: "#fafafa",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
          >
            <b>Pergunta:</b> {h.content}
            <br />
            <b>Resposta:</b> {h.response}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;
