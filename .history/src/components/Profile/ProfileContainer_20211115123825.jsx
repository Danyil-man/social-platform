import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profilereducer";
import {withRouter} from "react-router-dom";
import { Redirect } from "react-router";
import { AuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";





class ProfileContainer extends React.Component {

    componentDidMount(){
      let userId = this.props.match.params.userId;
      this.props.getUserProfile(userId)
      this.props.getStatus
    }

  render() {
    return (
        <Profile {...this.props} profile ={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
  }
    
}

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  AuthRedirect)
  (ProfileContainer)