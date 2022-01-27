import React from "react";
import { NavLink } from "react-router-dom";
//import logo from '../img/logo.png';
import headerclasses from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <header className={headerclasses.header}>
        <div>
          <h1 className={headerclasses.logotext}>Interaction</h1>
        </div>
        <div className={headerclasses.loginblock}>
          {props.isAuth ? (
            <div>
              Logged as : {props.login}{" "}
              <button onClick={props.logout}>Log Out</button>
            </div>
          ) : (
            <NavLink to={"/login"}>Log In</NavLink>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
