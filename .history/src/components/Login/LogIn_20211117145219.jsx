import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validations/validators";
import { Input } from "../common/FormsControls/TextArea";
import { login } from "../../redux/authreducer";

export const LogInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="pass"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} /> remember
        me
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div>
      <h1>Log In</h1>
      <ReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(LogIn);
