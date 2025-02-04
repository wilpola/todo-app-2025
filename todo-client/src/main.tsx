import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./hooks/ThemeProvider.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider defaultTheme="light" storageKey="wilpola-todo-theme">
      <App />
    </ThemeProvider>
  </Router>
);
