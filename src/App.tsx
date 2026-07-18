import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";

function App() {
  const [mode, setMode] = useState("bg-[#fafafa]");
  const [search, setSearch] = useState('');
  const changeMode = () => {
    setMode(mode === "bg-[#fafafa]" ? "bg-[#202d36]" : "bg-[#fafafa]");
  };
  return (
    <div className={`h-screen w-screen ${mode}`}>
      <Header changeMode={changeMode} mode={mode} />
      <Filter setSearch={setSearch} />
      <Card search={search} />
    </div>
  );
}

export default App;
