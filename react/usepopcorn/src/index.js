import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import App from "./App";

// import StarsRaiting from "./StarsRaiting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarsRaiting messages={["Terrible", "Bad", "Okey", "Good", "Amazing"]} />
    <StarsRaiting size={24} color="red" defaultRating={3} /> */}
    <App />
  </React.StrictMode>
);
