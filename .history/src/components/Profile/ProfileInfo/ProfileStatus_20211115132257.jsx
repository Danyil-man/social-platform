import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  };

  activateEditMode = () => {
     this.setState( {
         editMode: true,
         status: this.props.status
     })
  }

  deactivateEditMode = () => {
    this.setState( {
        editMode: false,
    })
    this.props.updateStatus(this.state.s)
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
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.description} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
