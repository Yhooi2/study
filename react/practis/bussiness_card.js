import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Tailwind",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "next.js",
    level: "advanced",
    color: "red",
  },
];

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

const SkillList = () => {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li>
          <Skill skill={skill.skill} level={skill.level} bc={skill.color} />{" "}
        </li>
      ))}
    </ul>
  );
};

function Skill({ skill, bc, level }) {
  return (
    <div className="skill" style={{ backgroundColor: bc }}>
      <span>{skill}</span>
      <span>
        {level == "intermediate" ? "👍" : level == "advanced" ? "💪" : "🐣"}
      </span>
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
