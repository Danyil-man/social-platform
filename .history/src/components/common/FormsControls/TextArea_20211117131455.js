import React from "react";
import form from "./TextArea.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  return (
    <div className={form.form__control + "" + form.error}>
      <textarea {...input} {...props} />
    </div>
  );
};
