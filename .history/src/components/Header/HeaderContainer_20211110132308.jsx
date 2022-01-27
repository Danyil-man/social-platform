import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setUserData } from "../../redux/authreducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
       
    }

    render(){
        return(
            <div>
                <Header {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuth} )(HeaderContainer);