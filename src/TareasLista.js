export function TareasLista({ tareas, onDelete }) {
    return (
        <ul className="tasks">
            {tareas.map((t) => (
                <li key={t.id} className={t.completa ? "done" : ""}>
                    <span className="task-title">{t.titulo}</span>
                    <button
                        className="btn btn-ghost task-delete"
                        onClick={() => onDelete?.(t.id)}
                        type="button"
                    >
                        Eliminar Tarea
                    </button>
                </li>
            ))}
        </ul>
    );
}
