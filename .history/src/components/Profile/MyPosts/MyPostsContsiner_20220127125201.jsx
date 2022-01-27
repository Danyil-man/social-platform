import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/profilereducer";
import Myposts from "./Myposts";

const mapStateToProps = (state) => {
  return {
    postdata: state.profilePage.postdata,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddPostCon: (newPostText) => {
      dispatch(actions.addPostActionCreator(newPostText));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostContainer;
