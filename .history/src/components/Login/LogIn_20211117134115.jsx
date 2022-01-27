import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/TextArea";

export const LogInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="username" name="user" component={Input} />
      </div>
      <div>
        <Field placeholder="password" name="pass" component={Input} />
      </div>
      <div>
        <Field type="checkbox" name="remember" component={Input} /> remember me
      </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "login",
})(LogInForm);

const LogIn = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Log In</h1>
      <ReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default LogIn;
