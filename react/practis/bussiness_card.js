import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => (
  <div>
    <img className="avatar" src="/ava.jpg" alt="Avatar" />
  </div>
);

const Intro = () => (
  <div>
    <h1>Artem Safronov</h1>
    <p>
      Full-stack web developer with a passion for clean code and user-friendly
      design.
    </p>
  </div>
);

const SkillList = () => (
  <div className="skill-list">
    <Skill skill="HTML/CSS" emoji="🫡" bc="orange" />
    <Skill skill="JavaScript" emoji="🤭" bc="yellow" />
    <Skill skill="Tailwind" emoji="😎" bc="green" />
    <Skill skill="ruby on rails" emoji="😭" bc="red" />
  </div>
);

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bc }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
