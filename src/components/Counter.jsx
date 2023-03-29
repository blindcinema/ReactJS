import { useState } from "react";

export function Counter(props) {
    const [ result, setResult ] = useState(props.initialValue); 
    function addOne() {
        setResult(result + props.step);
    }
    function subtractOne() {
        setResult(result - props.step);
    }
    return (
        <div>
            <button onClick={subtractOne}>-</button>
            {result.toFixed(props.precision || 0)}
            <button onClick={addOne}>+</button>
        </div>
    );
}