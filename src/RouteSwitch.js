import React, { useContext } from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmark from "./components/Bookmark";
import { UserContext } from "./context/user";

function RouteSwitch() {

    const [user, setUser] = useContext(UserContext).user;

    return (
        <BrowserRouter>
           <Routes>
              <Route exact path = "/" element = {<Main/>} />
              {/* {user ? <Route exact path = "/bookmark" element = {<Bookmark/>} /> : null} */}
           </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
