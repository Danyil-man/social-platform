import React from "react";

export const TextArea = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea {...input} {...props} />
    </div>
  );
};
