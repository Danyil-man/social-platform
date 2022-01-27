import React from "react";
import form from "./TextArea.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const Error = meta.touched && meta.error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {Error && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = ({ input, meta, ...props }) => {
  const Error = meta.touched && meta.error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {Error && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const Error = meta.touched && meta.error;
  return (
    <div className={form.form__control + " " + (Error ? form.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {Error && <span>{meta.error}</span>}
    </div>
  );
};
