import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }
    let ConnedctedRedirectComponent = connect(mapStateToProps)
    return RedirectComponent;
}