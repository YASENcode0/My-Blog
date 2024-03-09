import React from "react";

export default function Post({ post, comment }) {
  console.log(post.comments);

  return (
    <div className="post">
      <h2>{post.user}</h2>
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p className="content">{post.content}</p>
      <hr />
      <div>{comment}</div>
      <div>
        {post.comments
          ? post.comments.map((comment) => {
              return (
                <div>
                  <h3>{comment.user}</h3>
                  <h4>{comment.comment}</h4>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
