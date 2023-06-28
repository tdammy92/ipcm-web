//snippet to trim length of string
export const trimText = (text, lenght) => {
  if (!text?.length) return "";
  if (text?.length <= lenght) return text;

  return text?.substring(0, lenght) + "...";
};
