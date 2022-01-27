import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
 }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.activateEditMode }>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input onch autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
