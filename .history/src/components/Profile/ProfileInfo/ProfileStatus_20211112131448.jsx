import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

    return (
        <>
        <div>
            <span>{props.description}</span>
        </div>
        <div>
            <input value={props.description} />
        </div>
        </>
    )
}

export default ProfileStatus;