import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Pages } from "./pages/pages";
import { Navbar } from "./components/Navbar";
import { Private } from "./components/Private";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <Private/>

      <Pages />
    </div>
  );
}

export default App;
