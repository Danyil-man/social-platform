import React from "react";
import { useState } from "react";
import profinfoclasses from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(props.status);

  return (
    <div>
      {edit ? (
        <div>
          <span onClick={setEdit(true)}>{props.status || "No status"}</span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={setEdit(false)}
            value={state.status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;
