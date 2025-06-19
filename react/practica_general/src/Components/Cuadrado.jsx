// Componente que será un div de forma cuadrada que su tamaño va a depender del padre.

function Cuadrado({ pixeles, color }) {
    return (
        <div
            style={{
                backgroundColor: color,
                width: pixeles + "px",
                height: pixeles + "px",
            }}
        ></div>
    );
}

export default Cuadrado;
