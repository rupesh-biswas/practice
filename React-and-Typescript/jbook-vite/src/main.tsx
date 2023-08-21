import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bulmaswatch/superhero/bulmaswatch.min.css";

const el = document.getElementById("root") as HTMLElement;
const root = createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
