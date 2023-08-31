export const addEllipsis = (text: string) => {
  if (text && text.length > 50) {
    return text?.substring(0, 50) + "...";
  }
  return text;
};
