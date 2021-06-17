import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  props
) => {
  const {
    userId,
    title,
    completed = false
  } = props;
  const mark = completed ? "[完]" : "[未]";

  return (
    <p>{`${mark} ${title}： ユーザーID ${userId}`}</p>
  );
};
