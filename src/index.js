import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Saludo } from "./Saludo";
import { FormularioTarea } from "./FormularioTarea";
import { AgendaSemanal } from "./AgendaSemanal";
import "./Styles.css";

function App() {
    const [tareas, setTareas] = useState([]);

    const handleAddTarea = ({ descripcion, dia, hora }) => {
        if (!descripcion || !dia || !hora) return;

        const nuevaTarea = {
            id: Date.now(),
            titulo: `${dia} ${hora} - ${descripcion}`,
            completa: false,
        };

        setTareas((prev) => [...prev, nuevaTarea]);
    };

    const handleDeleteTarea = (id) => {
        setTareas((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <main className="app">
            <Saludo />

            <div className="panel-grid">
                <FormularioTarea onAdd={handleAddTarea} />
                <AgendaSemanal tareas={tareas} onDelete={handleDeleteTarea} />
            </div>
        </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);