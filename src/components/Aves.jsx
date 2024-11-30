import React, { useEffect, useState } from "react";
import "./Aves.css";

const Aves = () => {
  const [aves, setAves] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://xeno-canto.org/api/2/recordings?query=cnt:guatemala")
      .then((response) => response.json())
      .then((data) => {
        setAves(data.recordings);
        setCargando(false);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  if (cargando) {
    return <p style={{ textAlign: "center" }}>Cargando...</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Aves de Guatemala</h1>
      {aves.map((ave, index) => (
        <div className="card">
  <audio controls>
    <source src={ave.file} type="audio/mpeg" />
    Tu navegador no soporta audio.
  </audio>
  <p><strong>Familia:</strong> {ave.gen} {ave.sp}</p>
  <h3>{ave.en}</h3>
  <p><strong>Ubicación:</strong> {ave.loc}</p>
  <p><strong>Descubridor:</strong> {ave.rec}</p>
</div>
      ))}
    </div>
  );
};

export default Aves;
