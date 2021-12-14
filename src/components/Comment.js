import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { db } from "../firebase/firebase";

function Comment({comments, id}) {

  const [comment, setComment] = useState("");
  const [user, setUser] = useContext(UserContext).user;
  const [allComments, setAllComments] = useState(comments ? comments : []);

  const addComment = () => {
    if (comment) {
      allComments.push({
        username: user.email.replace("@gmail.com", ""),
        comment: comment,
      });

      db.collection("posts")
        .doc(id)
        .update({
          comments: allComments,
        })
        .then(() => {
          setComment("");
          console.log("added comment");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="comment-input">

      <textarea
        rows="1"
        className="comment-in"
        placeholder="Enter Comment..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button onClick={addComment}>Post</button>

    </div>
  );
}

export default Comment;
