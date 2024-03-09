import React from "react";

export default function Post({ post }) {
  console.log(post)
  
  return (
    <div className="post">
      <h2>{post.user}</h2>
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p className="content">
        {post.content}
      </p>
      <hr/>
      <div className="commentSpace">
        <input className="comment"/>
        <button className="commentBtn">add</button>
        <div>
          {}
        </div>
      </div>
    </div>
  );
}
