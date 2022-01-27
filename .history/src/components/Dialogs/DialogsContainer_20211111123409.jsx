import React from "react";
import { connect } from "react-redux";
import { onNewMessageBodyCreator, sendMessageCreator } from "../../redux/messagereducer";
import Dialog from "./Dialog";
import { Redirect } from "react-router";
import { AuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";

let mapStateToProps  = (state) => {
    return {
        messagePage: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onNewMessageBody: (messbody)=>{
            dispatch(onNewMessageBodyCreator(messbody))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        },
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect,
)(Dialog)



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect,
)(Dialog);