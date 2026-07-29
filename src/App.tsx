import { useState } from "react";
import "./App.css";
import users from '../src/assets/data.json'
import Header from "./components/Header";
import Detail from "./pages/Detail.tsx";
// import Card from "./components/Card";
// import Filter from "./components/Filter";
// import dashboard from '../src/pages/dashboard.tsx'
function App() {
  const [mode, setMode] = useState("bg-[#fafafa]");
  const [search, setSearch] = useState('');
  const [data, setData] = useState(users);
  const changeMode = () => {
    setMode(mode === "bg-[#fafafa]" ? "bg-[#202d36]" : "bg-[#fafafa]");
  };
  return (
    <div className={`h-screen w-screen ${mode}`}>
      <Header changeMode={changeMode} mode={mode} />
      {/* <Filter setSearch={setSearch} />
      <Card data={data} search={search} /> */}
      <Detail />
    </div>
  );
}

export default App;
