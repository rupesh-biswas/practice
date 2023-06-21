import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);
