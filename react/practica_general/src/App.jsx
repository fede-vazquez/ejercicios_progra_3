import Contador from "./Components/Contador";
import InputControlado from "./Components/InputControlado";
import ListaTareas from "./Components/ListaTareas";
import SelectorEstilosCuadrado from "./Components/SelectorEstilosCuadrado";
import ToggleVisibilidad from "./Components/ToggleVisibilidad";

function App() {
    return (
        <>
            <ToggleVisibilidad sectionName={"Contador"}>
                <Contador />
            </ToggleVisibilidad>
            <ToggleVisibilidad sectionName={"Input controlado"}>
                <InputControlado />
            </ToggleVisibilidad>
            <SelectorEstilosCuadrado />

            <ListaTareas />
        </>
    );
}

export default App;
