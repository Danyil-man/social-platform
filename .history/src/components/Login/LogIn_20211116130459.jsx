import React from "react";
import { reduxForm } from "redux-form";

export const LogInForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder="username" />
      </div>
      <div>
        <input placeholder="password" />
      </div>
      <div>
        <input type="checkbox" /> remember me
      </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const ReduxForm = reduxForm ({
    form: 'contact'
})(ContactForm)

const LogIn = (props) => {
  return (
    <div>
      <h1>Log In</h1>
      <LogInForm />
    </div>
  );
};

export default LogIn;
