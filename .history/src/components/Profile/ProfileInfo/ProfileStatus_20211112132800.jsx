import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    render() {
        return (
            <div>
        <div>
            <span>{this.props.description}</span>
        </div>
        <div>
            <input value={this.props.description} />
        </div>
        </div>
        )
}
}

export default ProfileStatus;