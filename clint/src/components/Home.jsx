import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
import Post from "./Post";
import axios from "axios";
import { userContext } from "../contexts/UserContext";
import PopUpCreatePst from "./PopUpCreatePst";

export default function Home() {
  const [posts, setPosts] = useState([{}]);
  const { user } = useContext(userContext);
  const [commentInput, setCommentInput] = useState("");

  function addComment(postId) {
    const comment = {
      user: user.name,
      comment: commentInput,
      postId: postId,
    };
    console.log(comment);
  }

  useEffect(() => {
    axios.get("/getposts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  const allPosts = posts.map((post) => {
    return (
      <div
        onChange={() => {
          console.log(post._id);
        }}
        key={post._id}
      >
        <Post
          post={post}
          comment={
            <div className="commentSpace">
              <input
                value={commentInput}
                className="comment"
                onChange={(e) => {
                  setCommentInput(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  addComment(post._id);
                }}
                className="commentBtn"
              >
                add
              </button>
            </div>
          }
        />
      </div>
    );
  });

  return (
    <div>
      <Loading />
      <NavBar />
      <button id="addPostBtn">add</button>
      <PopUpCreatePst />
      <div id="HomeDiv">{allPosts}</div>
    </div>
  );
}
