import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    render() (
        <div>
        <div>
            <span>{props.description}</span>
        </div>
        <div>
            <input value={props.description} />
        </div>
        </div>
    )
}

export default ProfileStatus;