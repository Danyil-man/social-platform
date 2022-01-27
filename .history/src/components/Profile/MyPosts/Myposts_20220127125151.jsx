import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validations/validators";
import { TextArea } from "../../common/FormsControls/TextArea";
import myposts from "./Myposts.module.css";
import Post from "./Post/Post";

let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          placeholder="Enter description"
          component={TextArea}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const Myposts = (props) => {
  let postEl = props.postdata.map((post) => (
    <Post key={post.id} user={post.user} mess={post.mess} like={post.like} />
  ));

  const ReduxForm = reduxForm({ form: "posts" })(PostForm);

  const addPostForm = (values) => {
    props.AddPostCon(values.newPostText);
  };

  return (
    <div>
      <div className={myposts.newpost}>
        <h4>New Posts</h4>
      </div>
      <div className={myposts.sharearea}>
        <ReduxForm onSubmit={addPostForm} />
      </div>
      <div className={myposts.posts}>{postEl}</div>
    </div>
  );
};

export default Myposts;
