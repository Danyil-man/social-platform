import React from "react";
import { Field } from "redux-form";
import { FieldValidatorType } from "../../../utils/validations/validators";
import form from "./TextArea.module.css";

type FormControlParamsType = {
  meta: { touched:boolean },
  children:  React.ReactNode
}

type FormControlType = (params:FormControlParamsType )=> React.ReactNode

const FormControl:FormControlType = ({meta, children, ...props }) => {
  const Error = meta.touched && meta.error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>{props.children}</div>
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
