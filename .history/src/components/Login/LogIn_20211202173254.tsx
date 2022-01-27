import React, { FC } from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validations/validators";
import { Input, createInputField } from "../common/FormsControls/TextArea";
import { login } from "../../redux/authreducer";
import { Redirect } from "react-router";
import form from "../common/FormsControls/TextArea.module.css";
import { AppStateType } from "../../redux/reduxStore";

export const LogInForm: FC<InjectedFormProps<LoginFormValuesType>> = (props) => {
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
      <div>
        {props.captchaUrl && <img src={props.captchaUrl} />}
        {props.captchaUrl &&
          createInputField(
            "Enter Captcha",
            "captcha",
            [requiredField],
            Input,
            {}
          )}
      </div>
      <div>
        {props.error && <div className={form.form__error}>{props.error}</div>}
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

type MapStateToPropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: string
  captcha: string
}

const LogIn: FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  return props.isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <div>
      <h1>Log In</h1>
      <ReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(LogIn);
