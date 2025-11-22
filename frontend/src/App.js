import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Chat from "./Chat";
import Historico from "./Historico";

function App() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Chatbot Simulado</h2>

      <label>Usuário ativo: </label>
      <select
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ marginBottom: 20 }}
      >
        <option value="A">Usuário A</option>
        <option value="B">Usuário B</option>
      </select>

      <Chat />
      <Historico />
    </div>
  );
}

export default App;
