import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [mode, setMode] = useState("bg-[#fafafa]");

  const changeMode = () => {
    setMode(mode === "bg-[#fafafa]" ? "bg-[#202d36]" : "bg-[#fafafa]");
  };
  return (
    <div className={`h-screen w-screen ${mode}`}>
      <Header changeMode={changeMode} mode={mode} />
      <Card />
    </div>
  );
}

export default App;
