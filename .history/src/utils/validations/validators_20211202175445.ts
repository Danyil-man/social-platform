expor type FieldValidatorType = (value: string)=> string | undefined

export const requiredField = (value:string): string | undefined => {
  if (value) return undefined;
  else {
    return "Field is required";
  }
};

export const maxLengthCreator = (maxLength:) => (value) => {
  if (value.length > maxLength) return `Max length ${maxLength} symbols`;
  else {
    return undefined;
  }
};
