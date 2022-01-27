import React, { FC } from "react";
import { Field, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validations/validators";
import form from "./TextArea.module.css";

type FormControlParamsType = {
  meta: {
    touched:boolean
    error: string
  },
  children:  React.ReactNode
}

const FormControl:FC<FormControlParamsType> = ({meta: {touched, error}, children}) => {
  const Error = touched && error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>
      {children}
      </div>
      {Error && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};



export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createInputField = (
  placeholder:string,
  name:string,
  validators: Array<FieldValidatorType>,
  component:string | React.Component | React.FC,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        {...props}
        validate={validators}
        component={component}
      />
      {text}
    </div>
  );
};
