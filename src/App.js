import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import { Route, withRouter } from "react-router";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LogIn from "./components/Login/LogIn";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" component={ProfileContainer} />

        <Route path="/dialog" component={DialogsContainer} />
        <Route path="/news" component={News} />
        <Route path="/setting" render={() => <div>Settings</div>} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/login" component={LogIn} />
      </div>
    </div>
  );
};

export default App;
