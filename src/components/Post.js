import React, { useContext, useEffect, useState } from "react";
import { db, storage } from "../firebase/firebase";
import Comment from "./Comment";
import ShowComment from "./ShowComment";
import { UserContext } from "../context/user";

function Post({ profileURL, username, id, photoURL, caption, comments}) {

    const [user, setUser] = useContext(UserContext).user;
    const [newUser, setNewUser] = useState("");


    useEffect(() => {
        
        if(user)
        setNewUser(user.email.replace("@gmail.com", ""));

    }, [user])

    const deletePost = () => {
        
        let image = storage.refFromURL(photoURL);
        image.delete();

        db.collection("posts").doc(id).delete();

    }
    
    return (
        <div className="post">
            <div className="post-header">
                <div><img src = {profileURL} alt = "profile pic" className="post-profile-pic"/></div>
                <div><strong>{username}</strong></div>
                {newUser === username ? <button onClick={deletePost} className="post-btn">Delete</button> : null}
            </div>
            <div className = "post-div">
                <img src = {photoURL} alt = "post pic" className="post-photo"/>
            </div>
            <div className="caption-post">
                <strong>{username}</strong> {caption}
            </div>

            {comments ? (comments.map((e) => (
                <ShowComment username = {e.username} comment_value = {e.comment} />
            ))) : null}

            {user ? <Comment id = {id} comments = {comments}/> : null}
        </div>
    )
}

export default Post;
