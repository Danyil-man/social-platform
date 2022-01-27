import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import { Route } from "react-router";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LogIn from "./components/Login/LogIn";
import { Redirect } from "react-router";


function App(props) {
 // let isAuth = props.auth.isAuth;

  return  (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/profile/:userId?' 
         render={ () => <ProfileContainer 
          />}/>
         
        <Route path='/dialog' render={ () => <DialogContainer />}/>
        <Route path='/news' component={News} />
        <Route path='/setting' render = { () => <div>Settings</div>}/>
        <Route path='/users' render={()=> <UsersContainer />  } />
        <Route path='/login' render={()=>  <LogIn /> } />
      </div>
    </div>
  ) //: ( <Redirect to={'/login'} /> )
}

export default App;