import React , { useState, useEffect} from "react";
import { db } from "../firebase/firebase";
import Post from "./Post";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

      db.collection("posts").onSnapshot((e) => {
        setPosts(
          e.docs.map((x) => ({
            id: x.id,
            post: x.data(),
          }))

        );
      });
    }, []);

    return (
        <div>
            {posts.map(({id, post}) => {
                return (
                <Post 
                key = {id}
                id = {id}
                profileURL = {post.userPhoto}
                username = {post.username}
                photoURL = {post.photoURL}
                caption = {post.caption}
                comments = {post.comments}
                />)
                
            })}
        </div>
    )
}

export default Feed;
