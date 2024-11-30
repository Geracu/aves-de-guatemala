import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Aves from "./components/Aves";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aves" element={<Aves />} />
      </Routes>
    </Router>
  );
}

export default App;
