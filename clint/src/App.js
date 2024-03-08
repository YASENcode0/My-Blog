import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import SinUp from "./components/SinUp";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routers */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SinUp />} />
        </Routes>
        {/*>> Routers >>*/}
      </div>
    </Router>
  );
}

export default App;
