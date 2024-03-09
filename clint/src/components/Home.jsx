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

  useEffect(() => {
    axios.get("/getposts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  const allPosts = posts.map((post) => {
    return (
      <div key={post._id}>
        <Post post={post} />
      </div>
    );
  });

  return (
    <div>
      <Loading />
      <NavBar />
      <button id="addPostBtn">add</button>
      <PopUpCreatePst/>
      <div id="HomeDiv">{allPosts}</div>
    </div>
  );
}
