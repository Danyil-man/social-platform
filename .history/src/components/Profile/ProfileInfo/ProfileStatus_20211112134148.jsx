import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
      alert('hey')
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onClick={ }>{this.props.description}</span>
          </div>
        ) : (
          <div>
            <input value={this.props.description} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
