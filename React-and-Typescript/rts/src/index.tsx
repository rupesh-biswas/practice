import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  );
}

const el = document.getElementById("root")!;
const root = createRoot(el);

root.render(<App />);
