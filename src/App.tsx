import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [mode, setMode] = useState("bg-white");

  const changeMode = () => {
    setMode(mode === "bg-white" ? "bg-black" : "bg-white");
  };
  return (
    <div className={`h-screen w-screen ${mode}`}>
      <Header changeMode={changeMode} mode={mode} />
    </div>
  );
}

export default App;
