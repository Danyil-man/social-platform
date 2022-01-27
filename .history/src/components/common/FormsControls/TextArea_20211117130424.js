import React from "react";

export const TextArea = (props) => {
  return (
    <div>
      <textarea
        {...props.input}
        name="newPostText"
        placeholder="Enter description"
      />
    </div>
  );
};
