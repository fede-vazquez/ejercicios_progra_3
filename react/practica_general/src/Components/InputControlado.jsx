// Input controlado

import { useState } from "react";

function InputControlado() {
    const [name, setName] = useState("");

    const handleChange = e => setName(e.target.value);
    return (
        <>
            <input type="text" onChange={handleChange} value={name} />
            <p>Nombre: {name}</p>
        </>
    );
}

export default InputControlado;
