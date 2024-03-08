import React from "react";

export default function SinUp() {
  return (
    <div>
      <form id="forma">
        <h2>Log In</h2>
        <input className="fld" placeholder="Email" required type="email" />
        <input
          className="fld"
          placeholder="PassWord"
          required
          type="password"
        />
        <input className="btn-logIn" type="submit" value="logIn" />
        <hr className="Line" />
        <p>create account</p>
      </form>
    </div>
  );
}
