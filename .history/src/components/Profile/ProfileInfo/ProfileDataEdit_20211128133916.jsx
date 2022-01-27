import { createInputField } from "../../common/FormsControls/TextArea";

const ProfileDataEdit = ({ profile }) => {
  return (
    <form>
      <div>
        <button onClick={setEditProfile}>Save</button>
      </div>
      <div>Full name: {createInputField()} </div>
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
    </form>
  );
};
export default ProfileDataEdit;
