import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setUserData } from "../../redux/authreducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
       authAPI
          .then(response => {
              if(response.data.resultCode === 0){
                  let {id, email, login} = response.data.data;
                 this.props.setUserData(id, email, login);
              }
          });
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

export default connect(mapStateToProps, {setUserData} )(HeaderContainer);