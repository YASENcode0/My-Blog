import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SinUp from "./SinUp";
import { userContext } from "../contexts/UserContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  function SinOut() {
    localStorage.removeItem("user");
    setUser({});
    navigate("/login");
  }

  return (
    <div id="navbar">
      <div id="navbarText">
        <img
          id="userIcon"
          src="https://definet.de/wp-content/uploads/2019/08/das-feld-ist-bestellt.jpg"
          alt="icon"
        />
        <h3 style={{color:"orange"}}>{user?.name}</h3>
        <h3 className="barBtn">hello</h3>
        <h3 className="barBtn">hello</h3>
        <h3 className="barBtn">hello</h3>
      </div>
      <div className="btnGrope">
        <button
          className={`btnGropeLog ${user ? "hide" : ""}`}
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </button>
        <button
          className={`btnGropeLog ${user ? "hide" : ""}`}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
        <button
          className={`btnGropeLog ${user ? "" : "hide"}`}
          onClick={SinOut}
        >
          sign out
        </button>
      </div>
    </div>
  );
}
