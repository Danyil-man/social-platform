import React from "react";
import form from "./TextArea.module.css";

const FormControl = ({ input, meta, child, element, ...props }) => {
  const Error = meta.touched && meta.error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>{props.child}</div>
      {Error && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = ({ input, meta, ...props }) => {
  return <FormControl {...props}>element={"textarea"}</FormControl>;
};

export const Input = ({ input, meta, ...props }) => {
  return (
    <FormControl {...props}>
      <input {...input} {...props} />
    </FormControl>
  );
};
