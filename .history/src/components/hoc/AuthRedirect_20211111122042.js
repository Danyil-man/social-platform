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
    et mapStateToProps = (state) => {
        return{
          profile: state.profilePage.profile,
          isAuth: state.auth.isAuth
        }
          
      }
    let ConnedctedRedirectComponent = connect(mapStateToProps)(AuthRedirect)
    return RedirectComponent;
}