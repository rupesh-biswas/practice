import "bulma/css/bulma.css";
import "./styles.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)