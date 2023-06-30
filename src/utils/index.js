//snippet to trim length of string
export const trimText = (text, lenght) => {
  if (!text?.length) return "";
  if (text?.length <= lenght) return text;

  return text?.substring(0, lenght) + "...";
};

export const modifyUrl = (url) => {
  if (url === "" || url === undefined) return;

  return process.env.NODE_ENV === "development"
    ? url
    : url.replace("http://", "https://");
};
