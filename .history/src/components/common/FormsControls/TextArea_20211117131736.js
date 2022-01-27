import React from "react";
import form from "./TextArea.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  return (
    <div className={form.form__control + " " + form.error}>
      <div>
        <textarea {...input} {...props} />
      </div>
      <span>error</span>
    </div>
  );
};
