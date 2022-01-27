import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import profinfoclasses from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {});

  const activate = () => {
    setEdit(true);
  };

  const deactivate = () => {
    setEdit(false);
    props.updateStatus(status);
  };

  const statusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!edit && (
        <div>
          <span onClick={activate}>{props.status || "No status"}</span>
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
