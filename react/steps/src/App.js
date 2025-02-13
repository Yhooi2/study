import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const hendlePrev = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const hendleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
          setStep(1);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button onClick={hendlePrev}>
              <spen>👈</spen>Previous
            </Button>

            <Button onClick={hendleNext}>
              Next<spen>👉</spen>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      <p>{children}</p>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#ffff" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
