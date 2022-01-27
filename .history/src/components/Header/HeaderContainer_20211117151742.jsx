
import React from "react";
import { connect } from "react-redux";
import { setAuth } from "../../redux/authreducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setAuth()
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
    logout: state.auth.logout
})

export default connect(mapStateToProps, {setAuth} )(HeaderContainer);