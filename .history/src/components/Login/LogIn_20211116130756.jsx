import React from "react";
import { Field, reduxForm } from "redux-form";

export const LogInForm = (props) => {
  return (
    <form>
      <div>
        <Field placeholder="username" component={'input'} />
      </div>
      <div>
        <Field placeholder="password" />
      </div>
      <div>
        <Field type="checkbox" /> remember me
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
