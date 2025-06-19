// Un toggle de visibilidad para mostrar/ocultar un contenido.

import { useState } from "react";

function ToggleVisibilidad({ children, sectionName }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => setIsVisible(!isVisible);

    return (
        <section>
            <button onClick={handleClick}>
                {isVisible ? "Ocultar" : "Mostrar"} {sectionName}
            </button>
            {isVisible && children}
        </section>
    );
}

export default ToggleVisibilidad;
