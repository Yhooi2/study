import { useState } from "react";
import "./styles.css";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState(null);
  const [oneTip, setOneTip] = useState(0);
  const [twoTip, setTwoTip] = useState(0);

  function reset() {
    setBill(null);
    setOneTip(0);
    setTwoTip(0);
  }
  const tip =
    oneTip && twoTip
      ? (twoTip + oneTip) / 2
      : oneTip
      ? oneTip / 2
      : twoTip
      ? twoTip / 2
      : 0;

  const tips = ((bill || 0) * tip) / 100;

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={oneTip} onTip={setOneTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tip={twoTip} onTip={setTwoTip}>
        How did your frend like the service?
      </SelectPercentage>
      {bill && (
        <>
          <OutputPay bill={bill} tips={tips} />
          <Reset reset={reset} />
        </>
      )}
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>
        How much was the bill?
        <input
          type="number"
          value={bill}
          placeholder="Bill value"
          onChange={(e) => onSetBill(+e.target.value)}
        ></input>
      </label>
    </div>
  );
}

function SelectPercentage({ tip, onTip, children }) {
  return (
    <div>
      <label>
        {children}
        <select value={tip} onChange={(e) => onTip(+e.target.value)}>
          <option value={0}> Dissatisfied(0%) </option>
          <option value={5}> It was okay(5%) </option>
          <option value={10}> It was good(10%) </option>
          <option value={20}> Absolutely amazing! (20%) </option>
        </select>
      </label>
    </div>
  );
}

function OutputPay({ bill, tips }) {
  return (
    <div>
      <h3> {`You pay $${bill + tips} ($${bill || 0} + $${tips})`}</h3>
    </div>
  );
}

function Reset({ reset }) {
  return (
    <div onClick={reset}>
      <button>Reset</button>
    </div>
  );
}
