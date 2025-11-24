import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./Chat";
import Historico from "./Historico";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div style={{ padding: 20 }}>
          {/* Remova o h2 daqui!
          <h2 style={{ color: "#ffe900", fontWeight: "bold" }}>
            Chatbot Simulado
          </h2>
          */}

          <nav style={{ marginBottom: 20 }}>
            <Link to="/" style={{ marginRight: 10, color: "#fff", textDecoration: "none" }}>
              Chat
            </Link>
            <Link to="/historico" style={{ color: "#fff", textDecoration: "none" }}>
              Histórico
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
