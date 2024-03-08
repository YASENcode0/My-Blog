import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div  className="divForm">
      <form className="forma">
        <h2>Log In</h2>
        <input className="fld" placeholder="Email" required type="email" autoFocus/>
        <input
          className="fld"
          placeholder="PassWord"
          required
          type="password"
        />
        <input className="btn-logIn" type="submit" value="log In" />
        <hr className="Line"/>
        <h5>create account <span><Link to='/signup'>Sign Up</Link></span></h5>
      </form>
    </div>
  );
}
