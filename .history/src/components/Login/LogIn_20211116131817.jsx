import React from "react";
import { Field, reduxForm } from "redux-form";

export const LogInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="username" name="user" component="input" />
      </div>
      <div>
        <Field placeholder="password" name="pass" component="input" />
      </div>
      <div>
        <Field type="checkbox" name="remember" component="input" /> remember me
      </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const ReduxForm = reduxForm ({
    form: 'login'
})(LogInForm)

const LogIn = (props) => {
  return (
    <div>
      <h1>Log In</h1>
      <ReduxForm />
    </div>
  );
};

export default LogIn;
