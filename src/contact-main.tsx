import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";
import "./index.css";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(<ContactApp />);
