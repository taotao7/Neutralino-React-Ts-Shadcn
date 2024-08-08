import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { init } from "@neutralinojs/lib";

createRoot(document.getElementById("root")!).render(
  <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <App />
      <ModeToggle />
    </ThemeProvider>
  </div>,
);

init();
