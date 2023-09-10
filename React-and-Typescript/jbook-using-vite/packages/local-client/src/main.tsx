import { createRoot } from "react-dom/client";
import App from "./App";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import { Provider } from "react-redux";
import { store } from "./states";

const el = document.getElementById("root") as HTMLElement;
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
