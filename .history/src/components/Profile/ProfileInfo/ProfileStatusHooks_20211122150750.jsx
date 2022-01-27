import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
  return (
    <div>
      {!this.state.editMode ? (
        <div>
          <span onClick={this.activateEditMode}>
            {this.props.status || "No status"}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;
