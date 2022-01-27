const ProfileDataEdit = ({ profile }) => {
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
export default ProfileDataEdit;
