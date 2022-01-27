import React from "react";
import MypostsContainer from "./MyPosts/MyPostsContsiner";
import profclasses from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MypostsContainer />
    </div>
  );
}

export default Profile;
