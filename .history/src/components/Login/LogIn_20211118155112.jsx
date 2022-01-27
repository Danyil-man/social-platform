import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validations/validators";
import { Input } from "../common/FormsControls/TextArea";
import { login } from "../../redux/authreducer";
import { Redirect } from "react-router";
import form from "./TextArea.module.css";

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
          name="password"
          type="password"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} /> remember
        me
      </div>
      <div className={form.form__error}></div>
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

  return props.isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <div>
      <h1>Log In</h1>
      <ReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(LogIn);
