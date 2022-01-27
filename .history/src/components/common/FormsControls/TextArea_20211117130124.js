import React from "react";

export const TextArea = (props) => {
  return (
    <div>
      <textarea {...props} name="newPostText" placeholder="Enter description" />
    </div>
  );
};
