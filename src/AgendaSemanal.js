import { TareasLista } from "./TareasLista";

export function AgendaSemanal({ tareas, onDelete }) {
    return (
        <section className="panel">
            <h2>Agenda semanal</h2>
            <TareasLista tareas={tareas} onDelete={onDelete} />
        </section>
    );
}
