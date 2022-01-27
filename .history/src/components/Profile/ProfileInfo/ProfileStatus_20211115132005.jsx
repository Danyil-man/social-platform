import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    statusInputRef = React.createRef()
     this.setState( {
         editMode: true,
         
     })
  }

  deactivateEditMode = () => {
    this.setState( {
        editMode: false,
    })
    this.props.updateStatus(thi)
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
            <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.description} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
