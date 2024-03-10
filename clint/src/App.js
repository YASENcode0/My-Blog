import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import SinUp from "./components/SinUp";
import Home from "./components/Home";
import { userContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [popUpPost, setPopUpPost] = useState(false);

  async function getUserFromDb(email) {
    await axios.post("/getuser", { email }).then((response) => {
      console.log(response);
      setUser(response.data.data);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      console.log(response.data.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    async function loadUser() {
      const upUser = await JSON.parse(localStorage.getItem("user"));
      setUser(upUser);
    }
    loadUser();
    setLoading(false);
  }, []);

  return (
    <userContext.Provider
      value={{
        getUserFromDb,
        loading,
        setLoading,
        user,
        setUser,
        popUpPost,
        setPopUpPost,
      }}
    >
      <Router>
        <div className="App">
          {/* Routers */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SinUp />} />
          </Routes>
          {/*>> Routers >>*/}
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
