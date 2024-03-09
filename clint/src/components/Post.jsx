import React from "react";

export default function Post({ user }) {
  return (
    <div className="post">
      <h2>name</h2>
      <h3>title</h3>
      <p className="content">
        content fgdf gbr eftgb trgbe gtbe gb etg bt eg bet content fgdf gbr
        eftgb trgbe gtbe gb etg bt eg betcontent fgdf gbr eftgb trgbe gtbe gb
        ee gb etg bt eg betcontent fgdf gbr eftgb trgbe
        gtbe gb etg bt eg bet
      </p>
      <hr/>
      <div className="commentSpace">
        <input className="comment"/>
        <button className="commentBtn">add</button>
      </div>
    </div>
  );
}
