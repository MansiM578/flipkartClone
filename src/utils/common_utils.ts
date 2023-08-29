type Props = {
  text: string | null;
};

export const addEllipsis: React.FC<Props> = (text: any) => {
  if (text.length > 50) {
    return text.substring(0, 50) + "...";
  }
  return text;
};
