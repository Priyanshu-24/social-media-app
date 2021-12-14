import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { signInGoogle } from "../firebase/authentication";

function Navbar() {

  const [user, setUser] = useContext(UserContext).user;

  const signInClick = async () => {

    let user_res = await signInGoogle();

    if (user_res) setUser(user_res);
  };

  return (
    <div className="header">
      <div>Hello</div>
      {user ? (
        <img src={user.photoURL} alt="profile pic" className = "profile-pic"/>
      ) : (
        <button onClick={signInClick}>Sign-Up with Google</button>
      )}
    </div>
  );
}

export default Navbar;
