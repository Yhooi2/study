import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />{" "}
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}> - </button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : `${count} days ${count > 0 ? "from today is " : "ago was "}`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
