import { reduxForm } from "redux-form";
import {
  createInputField,
  Input,
  TextArea,
} from "../../common/FormsControls/TextArea";

const ProfileDataEdit = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        Full name:
        {createInputField("Full name", "fullName", [], Input)}{" "}
      </div>
      <div>
        Looking for a job:
        {createInputField("", "lookingForAJob", [], Input, {
          type: "checkbox",
        })}
      </div>

      <div>
        Job description: {profile.lookingForAJobDescription}
        {createInputField(
          "Job description",
          "lookingForAJobDescription",
          [],
          TextArea
        )}
      </div>

      <div>{createInputField("aboutMe", "aboutMe", [], TextArea)}</div>
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
