import React from "react";
import { connect } from "react-redux";
import { onNewMessageBodyCreator, sendMessageCreator } from "../../redux/messagereducer";
import Dialog from "./Dialog";
import { Redirect } from "react-router";
import { AuthRedirect } from "../hoc/AuthRedirect";

let mapStateToProps  = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
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

let DialogRedirectComponent = AuthRedirect()
  }

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(DialogRedirectComponent);


export default DialogContainer;