import React from "react";
import profinfoclasses from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                 <div>
                 <span>{this.props.description}</span>
                 </div>
                 : 
                }
        </div>
        )
}
}

export default ProfileStatus;