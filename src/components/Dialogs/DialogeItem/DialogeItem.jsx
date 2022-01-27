import React from "react";
import { NavLink } from "react-router-dom";
import dialogcss from "./../Dialog.module.css";

const DialogItem = (props) => {
  let pathdialog = "/dialog/" + props.id;

  return (
    <div className={`${dialogcss.item} ${dialogcss.active}`}>
      <NavLink to={pathdialog}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;