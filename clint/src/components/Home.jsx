import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
import Post from "./Post";
import axios from "axios";
import { userContext } from "../contexts/UserContext";
import PopUpCreatePst from "./PopUpCreatePst";

import sendIcon from "../assets/pencil.png";
import PoupComment from "./PoupComment";

export default function Home() {
  const [posts, setPosts] = useState([{}]);
  const {
    user,
    popUpPost,
    setPopUpPost,
    setPostId,
    setPopUpComment,
    postsAll,
    userOn,
    setLoading,
  } = useContext(userContext);

  useEffect(() => {
    setLoading(false);
    console.log("hi user");
  }, []);
  useEffect(() => {
    axios.get("/getposts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, [postsAll]);

  function popUpOnOf() {
    setPopUpPost(!popUpPost);
  }

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
          currantUser={user.name}
          comment={
            <div className="commentSpace">
              <button
                onClick={() => {
                  setPostId(post._id);
                  setPopUpComment(true);
                }}
                className={`commentBtn ${userOn ? "" : "hide"}`}
              >
                ad
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
      <div className={`${userOn ? "" : "hide"}`} id="addPostBtnDiv">
        <button id="addPostBtn" onClick={popUpOnOf}>
          <img src={sendIcon} alt="add" />
        </button>
      </div>
      <PopUpCreatePst />
      <PoupComment />
      <div id="HomeDiv">{allPosts}</div>
    </div>
  );
}
