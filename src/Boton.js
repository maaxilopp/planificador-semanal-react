export function Boton({ texto, onClick, tipo = "primary" }) {
    return (
        <button className={`btn btn-${tipo}`} onClick={onClick}>
            {texto}
        </button>
    );
}