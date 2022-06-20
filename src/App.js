import "./App.css";
import { useState } from "react";
import Predefinedquery from "./components/Queries/Predefinedquery";

function App() {
  const [selected, setSelected] = useState({
    id: 0,
    name: "Predefined Queries",
  });
  return (
    <div className="App">
      <Predefinedquery selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
