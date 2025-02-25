import { useState, useEffect } from "react";

export default function App() {
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("USD");
  const [count, setCount] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    const controller = new AbortController();

    async function getValue() {
      if (currency1 === currency2) {
        setAmount(count);
      } else if (count > 0) {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${count}&from=${currency1}&to=${currency2}`,
            { signal: controller.signal }
          );
          const data = await res.json();

          console.log(data.rates[currency2]);
          setAmount(data.rates[currency2]);
        } catch (err) {
          if (err.name !== "AbortError") console.log(err);
        }
      }
    }
    getValue();
    return () => controller.abort();
  }, [count, currency1, currency2]);

  return (
    <div>
      <input type="text" onChange={(e) => setCount(e.target.value)} />
      <select onChange={(e) => setCurrency1(e.target.value)} value={currency1}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PHP">PHP</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setCurrency2(e.target.value)} value={currency2}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PHP">PHP</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {amount} {currency2}
      </p>
    </div>
  );
}
