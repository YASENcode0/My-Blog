import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
import { useState } from "react";
import axios from "axios";

export default function PopUpCreatePst() {
  const { user, popUpPost, setPopUpPost, postsAll, setPostsAll } =
    useContext(userContext);
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  function setPopOf() {
    setPopUpPost(false);
  }

  function addedPost() {
    const postToSend = {
      id: user.id,
      user: user.name,
      title: post.title,
      content: post.content,
    };
    console.log(postToSend);
    axios.post("/newpost", postToSend).then((response) => {
      console.log(response);
    });
    setPopOf();
    setPostsAll(postsAll + 1);
  }
  if (popUpPost) {
    return (
      <div className="popupPostDiv">
        <div className="popupPost">
          <input
            className="fldPost"
            value={post.title}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
            placeholder="title"
          />
          <textarea
            className="fldPost"
            value={post.content}
            onChange={(e) => {
              setPost({ ...post, content: e.target.value });
            }}
            placeholder="content"
          ></textarea>
          <div className="BtnCreatePost">
            <button className="BtnCreate redBtn" onClick={setPopOf}>
              cancel
            </button>
            <button className="BtnCreate " onClick={addedPost}>
              post
            </button>
          </div>
        </div>
      </div>
    );
  }
}
