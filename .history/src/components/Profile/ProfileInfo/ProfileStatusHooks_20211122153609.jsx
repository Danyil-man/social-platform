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
            onChange={setStatus((e) => e.currentTarget.value)}
            autoFocus={true}
            onBlur={(setEdit(false), props.updateStatus(status))}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;
