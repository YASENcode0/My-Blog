import React from "react";
import { Link } from "react-router-dom";

export default function SinUp() {
  return (
    <div className="divForm">
      <form className="forma">
        <h2>Create New Account</h2>
        <input className="fld" placeholder="Name" required type="text" />
        <input className="fld" placeholder="Email" required type="email" />
        <input
          className="fld"
          placeholder="PassWord"
          required
          type="password"
        />
        <input className="btn-logIn" type="submit" value="Sign Up" />
        <hr className="Line" />
        <h5>Already have an account? <span><Link to='/login'>Log in</Link></span></h5>
      </form>
    </div>
  );
}
