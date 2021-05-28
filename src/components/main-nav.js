import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import '../sass/_main-nav.scss'

const MainNav = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [aux, setAux] = useState(true);

  useEffect( () => {
    if(aux===true){
      fetch(`${serverUrl}/api/messages/public-message`);
      setAux(false)
    }
    return () => {
    }
  }, [aux])
  return (
  <div id='nav' className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      About Me
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink>
  </div>
);
}

export default MainNav;
