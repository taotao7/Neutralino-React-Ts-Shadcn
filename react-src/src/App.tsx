import { os } from "@neutralinojs/lib";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tray = {
      icon: "/icons/app-16.png",
      menuItems: [
        { id: "SYNC", text: "Sync Vale rules" },
        { id: "UPDATE", text: "Check for updates" },
        { id: "SEP", text: "-" },
        { id: "QUIT", text: "Quit" },
      ],
    };
    os.setTray(tray);
    console.log("tray set");
  }, []);

  return (
    <>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
        My Neutralino App Template with React & shadcn/ui
      </h1>
    </>
  );
}

export default App;
