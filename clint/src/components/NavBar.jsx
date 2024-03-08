import React from "react";
import { useNavigate } from "react-router-dom";
import SinUp from "./SinUp";

export default function NavBar() {
  const navigate = useNavigate();

  function SinOut() {}
  return (
    <div id="navbar">
      <div id="navbarText">
        <img
          id="userIcon"
          src="https://definet.de/wp-content/uploads/2019/08/das-feld-ist-bestellt.jpg"
          alt="icon"
        />
        <h3 className="barBtn">hello</h3>
        <h3 className="barBtn">hello</h3>
        <h3 className="barBtn">hello</h3>
      </div>
      <div className="btnGrope">
        <button
          className="btnGropeLog"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </button>
        <button
          className="btnGropeLog"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
        <button className="btnGropeLog hide" onClick={SinOut}>
          sign out
        </button>
      </div>
    </div>
  );
}
