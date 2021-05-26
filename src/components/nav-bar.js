import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

import '../sass/_nav-bar.scss'

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <div id='navBar' className="navbar navbar-expand navbar-light ">
        <div className="container">
          {/* <div className="navbar-brand logo" /> */}
          <MainNav />
          <AuthNav />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
