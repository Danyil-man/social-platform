import React from "react";
import { useState } from "react";
import profinfoclasses from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(props.status);

  const deactivate = () => {
    setEdit(false);
    props.updateStatus(status);
  };

  const statusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {edit && (
        <div>
          <span onClick={setEdit(true)}>{props.status || "No status"}</span>
        </div>
      )}
      {edit && (
        <div>
          <input
            onChange={statusChange}
            autoFocus={true}
            onBlur={deactivate}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;
