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

compose()()

let DialogRedirectComponent = AuthRedirect(Dialog)

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(DialogRedirectComponent);


export default DialogContainer;