import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
    </div>
  );
}

export default App;
