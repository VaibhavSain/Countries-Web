import { useState } from "react";
import "./App.css";
import users from '../src/assets/data.json'
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("bg-[#fafafa]");
  const [search, setSearch] = useState('');
  const [id, setId] = useState("");
  const [data, setData] = useState(users);
  const changeMode = () => {
    setMode(mode === "bg-[#fafafa]" ? "bg-[#202d36]" : "bg-[#fafafa]");
  };
  console.log(id);

  return (
    <div className={`h-screen w-screen ${mode}`}>
      <Header changeMode={changeMode} mode={mode} />
      <Routes>
        <Route path="/" element={<Dashboard setId={setId} setSearch={setSearch} data={data} search={search} />} />
        <Route path="/details" element={<Detail id={id} />} />
      </Routes>

    </div>
  );
}

export default App;
