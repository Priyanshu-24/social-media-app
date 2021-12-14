import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { signInGoogle } from "../firebase/authentication";

function Navbar() {

  const [user, setUser] = useContext(UserContext).user;

  const signInClick = async () => {

    let user_res = await signInGoogle();

    if (user_res) setUser(user_res);
  };

  const logOUT = () => {
    window.location.reload(false);  
  }


  return (
    <div className="header">
      <div>Hello Insta</div>
      
      {user ? (
        <div className="header-right">
        <button onClick={logOUT} className="logout-btn">LogOut</button>
        <img src={user.photoURL} alt="profile pic" className = "profile-pic"/>
        </div>
      ) : (
        <button onClick={signInClick} className="sign-up-google-btn">Sign-Up with Google</button>
      )}
    </div>
  );
}

export default Navbar;
