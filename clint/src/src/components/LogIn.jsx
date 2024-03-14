import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { userContext } from "../contexts/UserContext";

export default function LogIn() {
  const { getUserFromDb, setLoading, user, userOn, setUserOn } =
    useContext(userContext);
  useEffect(() => {
    if (userOn) {
      navigate("/");
    }
  }, []);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  function clearMsg() {
    setErrMsg("");
  }

  async function LogIn() {
    if (logUser.email !== "" && logUser.password !== "") {
      setLoading(true);
      await axios.post("/login", logUser).then((response) => {
        console.log(response);
        if (response.data.msg === 1) {
          getUserFromDb(logUser.email);
          setUserOn(true);
          navigate("/");
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
        <h2>Log In</h2>
        <input
          onClick={clearMsg}
          onChange={(e) => {
            setLogUser({ ...logUser, email: e.target.value });
          }}
          value={logUser.email}
          className="fld"
          placeholder="Email"
          required
          type="email"
          autoFocus
        />
        <input
          onClick={clearMsg}
          onChange={(e) => {
            setLogUser({ ...logUser, password: e.target.value });
          }}
          value={logUser.password}
          className="fld"
          placeholder="PassWord"
          required
          type="password"
        />
        <input
          onClick={LogIn}
          className="btn-logIn"
          type="submit"
          value="log In"
        />
        <hr className="Line" />
        <h5>
          create account{" "}
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
          <p className="errMsg">{errMsg}</p>
        </h5>
      </form>
    </div>
  );
}
