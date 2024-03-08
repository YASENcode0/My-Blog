import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SinUp() {
  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  function clearMsg() {
    setErrMsg("");
  }

  async function sendData() {
    if (
      newUser.name !== "" &&
      newUser.email !== "" &&
      newUser.password !== ""
    ) {
      await axios.post("/adduser", newUser).then((response) => {
        if (response.data.msg === 1) {
          console.log(response);
          navigate("/login");
        } else {
          setErrMsg(response.data.msg);
        }
      });
    }
  }

  return (
    <div className="divForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="forma"
      >
        <h2>Create New Account</h2>
        <input
          onClick={clearMsg}
          onChange={(e) => {
            setNewUser({ ...newUser, name: e.target.value });
          }}
          value={newUser.name}
          className="fld"
          placeholder="Name"
          required
          type="text"
        />
        <input
          onClick={clearMsg}
          onChange={(e) => {
            setNewUser({ ...newUser, email: e.target.value });
          }}
          value={newUser.email}
          className="fld"
          placeholder="Email"
          required
          type="email"
        />
        <input
          onClick={clearMsg}
          onChange={(e) => {
            setNewUser({ ...newUser, password: e.target.value });
          }}
          value={newUser.password}
          className="fld"
          placeholder="PassWord"
          required
          type="password"
        />
        <input
          onClick={sendData}
          className="btn-logIn"
          type="submit"
          value="Sign Up"
        />
        <hr className="Line" />
        <h5>
          Already have an account?{" "}
          <span>
            <Link to="/login">Log in</Link>
          </span>
          <p className="errMsg">{errMsg}</p>
        </h5>
      </form>
    </div>
  );
}
