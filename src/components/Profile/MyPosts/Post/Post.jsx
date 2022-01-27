import React from "react";
import post from "./Post.module.css";

function Post(props) {
  return (
    <>
      <div className={post.item}>
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8f160b5e9d954380c4b14b0f5ff4295ec9c141df_full.jpg"
          alt="avapost"
        />
        <div>User: {props.user}</div>
        <div className='post'>Post: {props.mess}</div>
        <div>
        <span>Like: {props.like}</span>
            
        </div>
      </div>
    </>
  );
}

export default Post;
