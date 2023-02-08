export const isNotEmptyString = (value: string) => {
  return Boolean(value !== "" || value.trim() !== "");
};
