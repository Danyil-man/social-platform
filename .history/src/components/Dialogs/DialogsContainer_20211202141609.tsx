import React from "react";
import { connect } from "react-redux";
import { actions, sendMessageCreator } from "../../redux/messagereducer";
import Dialog from "./Dialog";
import { Redirect } from "react-router";
import { AuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore";

let mapStateToProps = (state: AppStateType) => {
  return {
    messagePage: state.messagePage,
  };
};


export default compose(
  connect(mapStateToProps, {
    sendMessageCreator: actions.sendMessageCreator
  }),
  AuthRedirect
)(Dialog);
