import React from "react";
import form from "./TextArea.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const Error = meta.touched && meta.error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>{props.child}</div>
      {Error && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
    const ({ input, meta, child, ...restProps }
  return <FormControl {...props}>  <textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const ({ input, meta, child, ...restProps }
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
