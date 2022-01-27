import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

    return (
        <>
        <div>
            <span>{props.description}</span>
        </div>
        </>
    )
}

export default ProfileStatus;