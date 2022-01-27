import React from "react";
import MypostsContainer from "./MyPosts/MyPostsContsiner";
import profclasses from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MypostsContainer 
      />
      
    </div>
  );
}

export default Profile;
