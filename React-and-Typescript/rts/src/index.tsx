import { createRoot } from "react-dom/client";
import UserSearch from "./Refs/UserSearch";

function App() {
  return (
    <div>
      <UserSearch />
    </div>
  );
}

const el = document.getElementById("root")!;
const root = createRoot(el);

root.render(<App />);
