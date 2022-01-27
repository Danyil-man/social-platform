import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
     this.setState( {
         editMode: true,
     })
  }

  deactivateEditMode = () => {
    this.setState( {
        editMode: false,
    })
 }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.activateEditMode }>{this.props.description}</span>
          </div>
        ) : (
          <div>
            <input onBlur value={this.props.description} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
