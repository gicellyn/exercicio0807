import { useState } from "react";

function ConversorTemperatura() {
    const [temperatura, setTemperatura] = useState(0);
    const [ fahrenheit, setFahrenheit] = useState(0);

    function handleTemperatura(e) {
        const input = e.target;
        const valor = input.value;
        setTemperatura(valor);
    }

    function handleConversao() {
        const f = (temperatura * 1.8) + 32
        setFahrenheit(f);
    }
    return(
        <section>
           <h3>Conversor Celsius - Fahrenheit</h3>
           <input type="number" placeholder="Celcius" onChange={handleTemperatura}/><br />
           <button onClick={handleConversao}>Converter</button>
           <h3>Celcius para Fahrenheit: {fahrenheit}</h3>
        </section>
    )
    
}

export default ConversorTemperatura;