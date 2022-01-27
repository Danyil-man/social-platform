/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import PreLoader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userWithoutPhoto from "../../img/withoutphoto.png";
import ProfileDataEdit from "./ProfileDataEdit";

function ProfileInfo(props) {
  const [editProfile, setEditProfile] = useState(false);

  if (!props.profile) {
    return <PreLoader />;
  }

  const mainPhotoUpdate = (e) => {
    if (e.currentTarget.files.length) {
      props.savePhoto(e.currentTarget.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditProfile(false);
    });
  };

  return (
    <div>
      <div>
        <img
          src={props.profile.photos.large || userWithoutPhoto}
          className={style.photo}
          alt="photo"
        />
        {props.isOwner && <input type="file" onChange={mainPhotoUpdate} />}
      </div>
      <div className={style.description}>
        <ProfileStatusHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      {editProfile ? (
        <ProfileDataEdit
          initialValues={props.profile}
          profile={props.profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          setEditProfile={() => setEditProfile(true)}
        />
      )}
    </div>
  );
}

const ProfileData = ({ profile, isOwner, setEditProfile }) => {
  return (
    <>
      <div>{isOwner && <button onClick={setEditProfile}>Edit</button>}</div>
      <div>Full name: {profile.fullName}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJobDescription && (
        <div>Job description: {profile.lookingForAJobDescription}</div>
      )}
      <div>About me: {profile.aboutMe}</div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contactsList}>
      {contactTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
