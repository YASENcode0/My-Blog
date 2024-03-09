import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
import { useState } from "react";
import axios from "axios";

export default function PopUpCreatePst() {
  const { user } = useContext(userContext);
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  function addedPost() {
    console.log(post);

    const postToSend = {
      id: user.id,
      user: user.name,
      title: post.title,
      content: post.content,
    };
    console.log(postToSend)
    axios.post('/newpost',postToSend).then(response=>{
        console.log(response)
    })
  }

  return (
    <div>
      <input
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
        placeholder="title"
      />
      <textarea
        value={post.content}
        onChange={(e) => {
          setPost({ ...post, content: e.target.value });
        }}
        rows="5"
        cols="50"
        placeholder="content"
      ></textarea>
      <button onClick={addedPost}>post</button>
    </div>
  );
}
