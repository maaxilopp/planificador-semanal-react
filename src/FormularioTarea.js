import { useState } from "react";
import { Boton } from "./Boton";

export function FormularioTarea({ onAdd }) {
    const [descripcion, setDescripcion] = useState("");
    const [dia, setDia] = useState("");
    const [hora, setHora] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const desc = descripcion.trim();
        if (!desc || !dia || !hora) {
            setError("Por favor completa todos los campos");
            return;
        }

        
        const [horas, minutos] = hora.split(":").map(Number);
        if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
            setError("No se puede agregar la tarea: hora no válida");
            return;
        }

        setError("");
        onAdd?.({ descripcion: desc, dia, hora });
        setDescripcion("");
        setDia("");
        setHora("");
    };

    return (
        <section className="panel">
            <h2>Tarea a agregar</h2>
            <form className="task-form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                <label className="field">
                    <span>Descripcion</span>
                    <textarea 
                        placeholder="Ej. Comida con mama" 
                        rows={3} 
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </label>
                <label className="field">
                    <span>Dia</span>
                    <select value={dia} onChange={(e) => setDia(e.target.value)}>
                        <option value="">Selecciona un dia</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sabado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </label>
                <label className="field">
                    <span>Hora</span>
                    <input 
                        type="time" 
                        min="00:00" 
                        max="23:59" 
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                </label>
                <Boton texto="Agregar tarea" onClick={handleSubmit} />
            </form>
        </section>
    );
}
