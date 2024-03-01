import { useState } from "react";
import "./Counter.css";
const Counter = () => {
    const [count, SetCount] = useState(0);
    return (
            <section className="count">
                <button onClick={() => SetCount(count + 1)}>+</button>
                <button onClick={() => SetCount(count + 1)}>-</button>
                <button onClick={reset}>RESET</button>
            </section>
    );
}
 
export default Counter;