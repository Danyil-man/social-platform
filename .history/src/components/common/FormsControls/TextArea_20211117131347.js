import React from "react";
import form from "./TextArea.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  return (
    <div className={form.form__control}>
      <textarea {...input} {...props} />
    </div>
  );
};
