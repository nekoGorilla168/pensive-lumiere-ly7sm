import { VFC } from "react";

type Style = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Style> = (props) => {
  const { color, fontSize } = props;
  return (
    <p style={{ color, fontSize }}>
      テキストです
    </p>
  );
};
