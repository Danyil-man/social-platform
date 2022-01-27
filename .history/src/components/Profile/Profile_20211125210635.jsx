import React from "react";
import MypostsContainer from "./MyPosts/MyPostsContsiner";
import profclasses from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ profile, status, updateStatus }) {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MypostsContainer />
    </div>
  );
}

export default Profile;
