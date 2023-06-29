import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reportWebVitals } from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
