import React from "react";

export default function Post({ post, comment, currantUser }) {
  // console.log(post.comments);

  return (
    <div className="post">
      <h2>
        {post?.user === currantUser ? (
          <span style={{ color: "#37474f" }}>You</span>
        ) : (
          post.user
        )}
      </h2>
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p className="content">{post?.content}</p>
      <hr />
      <div>{comment}</div>
      <div className="scroall">
        {post.comments
          ? post.comments.map((comment) => {
              return (
                <div className="PostComment">
                  <h3>
                    {comment?.user == currantUser ? (
                      <span style={{ color: "#37474f" }}>You</span>
                    ) : (
                      comment.user
                    )}
                  </h3>
                  <p className="PostCommentP">{comment?.comment}</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
