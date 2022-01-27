import React from "react";
import dialogcss from "./../Dialog.module.css";

const Message = (props) => {
  return <div className={dialogcss.mess}>{props.mess}</div>;
};

export default Message;
