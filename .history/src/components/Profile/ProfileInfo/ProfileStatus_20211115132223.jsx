import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  };

  activateEditMode = () => {
     this.setState( {
         editMode: true,
         statu
     })
  }

  deactivateEditMode = () => {
    this.setState( {
        editMode: false,
    })
    this.props.updateStatus(this.statusInputRef.current.value)
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
