export const requiredField = (value) => {
  if (value) return undefined;

  return "Field is required";
};

export const maxLengthCreator = (maxLength) => {
  if (value.length > maxLength) return `Max length ${maxLength} symbols`;
};

export const maxLength30 = (value) => {
  if (value.length > 30) return "Max length 30 symbols";
  return undefined;
};
