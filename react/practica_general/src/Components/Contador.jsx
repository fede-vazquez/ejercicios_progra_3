// Contador básico con sumar, restar y resetear

import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    const handleSuma = () => setContador(prev => prev + 1);
    const handleResta = () => setContador(prev => prev - 1);
    const handleReset = () => setContador(0);

    return (
        <>
            <p>Contador: {contador}</p>
            <div>
                <button onClick={handleSuma}>Sumar</button>
                <button onClick={handleResta}>Restar</button>
                <button onClick={handleReset}>Resetear</button>
            </div>
        </>
    );
}
export default Contador;
