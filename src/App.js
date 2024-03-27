import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";

function App() {
  return (
    <>
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
