import React from "react";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";


function Main() {
  return (
    <div>
      <Navbar />
      <CreatePost />
      <Feed />
    </div>
  );
}

export default Main;
