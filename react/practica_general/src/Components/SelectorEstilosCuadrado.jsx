import { useState } from "react";
import Cuadrado from "./Cuadrado";

function SelectorEstilosCuadrado() {
    const [cantidadPixeles, setCantidadPixeles] = useState(0);
    const [color, setColor] = useState("red");
    const handleChangePixeles = e => setCantidadPixeles(e.target.value);
    const handleChangeColor = e => setColor(e.target.value);

    return (
        <section>
            <div>
                <label htmlFor="selectorPixeles">
                    Selecciona el tamaño del cuadrado en pixeles:
                </label>
                <input
                    type="number"
                    id="selectorPixeles"
                    value={cantidadPixeles}
                    onChange={handleChangePixeles}
                />
            </div>
            <div>
                <label htmlFor="selectorColor">
                    Selecciona el color del cuadrado:
                </label>
                <input
                    type="text"
                    id="selectorColor"
                    value={color}
                    onChange={handleChangeColor}
                />
            </div>
            <div className="contenedorCuadrado">
                <Cuadrado pixeles={cantidadPixeles} color={color} />
            </div>
        </section>
    );
}

export default SelectorEstilosCuadrado;
