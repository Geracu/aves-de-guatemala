import { useNavigate } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
    const navigate = useNavigate();


    const handleCargar = () => {
        navigate("/aves");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Inicio</h1>
            <h2>Dilsa Geraldine Acuna Zelaya</h2>
            <h3>23002614</h3>
            <button onClick={handleCargar} style={{ padding: "10px 20px" }}>
                Cargar
            </button>
        </div>
    );
};

export default Inicio;
