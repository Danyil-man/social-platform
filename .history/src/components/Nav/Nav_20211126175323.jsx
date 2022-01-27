import React from "react";
import { NavLink } from "react-router-dom";
import navclasses from "./Nav.module.css";

function Nav() {
  return (
    <nav className={navclasses.nav}>
      <div className={navclasses.item}>
        <NavLink to="/profile" activeClassName={navclasses.active}>
          Profile
        </NavLink>
      </div>
      <div className={navclasses.item}>
        <NavLink to="/dialog" activeClassName={navclasses.active}>
          {" "}
          Message
        </NavLink>
      </div>
      <div className={navclasses.item}>
        <NavLink to="/news" activeClassName={navclasses.active}>
          Іщье
        </NavLink>
      </div>
      <div className={navclasses.item}>
        <NavLink to="/setting" activeClassName={navclasses.active}>
          Setting
        </NavLink>
      </div>
      <div className={navclasses.item}>
        <NavLink to="/users" activeClassName={navclasses.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
