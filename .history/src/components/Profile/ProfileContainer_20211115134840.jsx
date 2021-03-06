import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profilereducer";
import {withRouter} from "react-router-dom";
import { Redirect } from "react-router";
import { AuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";





class ProfileContainer extends React.Component {

    componentDidMount(){
      let userId = this.props.match.params.userId;
      if(!userId)
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
    }

  render() {
    return (
        <Profile {...this.props} profile ={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
}

let mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
    
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  AuthRedirect)
  (ProfileContainer)