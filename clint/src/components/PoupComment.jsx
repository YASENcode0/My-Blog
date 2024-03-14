import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
import { useState } from "react";
import axios from "axios";

export default function PoupComment() {
  const {
    user,
    popUpComment,
    setPopUpComment,
    postId,
    setPostId,
    postsAll,
    setPostsAll,
  } = useContext(userContext);
  const [commentInput, setCommentInput] = useState("");

  function setPopOf() {
    setPopUpComment(false);
  }

  function addComment() {
    const comment = {
      user: user.name,
      postId: postId,
      comment: commentInput,
    };

    console.log(postId);
    axios.post("/addcomment", comment).then((response) => {
      console.log(response);
    });
    setPopOf();
    setPostsAll(postsAll + 1);
  }

  if (popUpComment) {
    return (
      <div className="popupPostDiv">
        <div className="popupPost">
          <input
            className="fldPost"
            value={commentInput}
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
            placeholder="title"
          />

          <div className="BtnCreatePost">
            <button className="BtnCreate redBtn" onClick={setPopOf}>
              cancel
            </button>
            <button className="BtnCreate " onClick={addComment}>
              post
            </button>
          </div>
        </div>
      </div>
    );
  }
}
