import React from "react";
import { connect } from "react-redux";
import { onNewMessageBodyCreator, sendMessageCreator } from "../../redux/messagereducer";
import Dialog from "./Dialog";
import Re

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

let DialogRedirectComponent = (props) => {
    if(!this.props.isAuth) return <Redirect to='login' />
    return <Dialog {...props} />
  }

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default DialogContainer;