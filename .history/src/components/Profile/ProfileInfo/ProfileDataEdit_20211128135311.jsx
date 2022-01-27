import { reduxForm } from "redux-form";
import { createInputField, Input } from "../../common/FormsControls/TextArea";

const ProfileDataEdit = ({ profile }) => {
  return (
    <form>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      <div>
        Full name:
        {createInputField("Full name", "fullName", [], Input)}{" "}
      </div>
      <div>Looking for a job:
      {createInputField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      {profile.lookingForAJob && }
      
      <div>About me: {profile.aboutMe}</div>
      {/* <div>
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
      </div> */}
    </form>
  );
};

const ProfileDataEditRedux = reduxForm({ form: "editProfile" })(
  ProfileDataEdit
);

export default ProfileDataEditRedux;
