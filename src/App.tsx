import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { User } from "./types/user";

const user: User = {
  name: "JJJ"
  //hobby: ["Game", "Manga"]
};

export default function App() {
  const [todo, setTodo] = useState<
    Array<TodoType>
  >([]);
  const onClickFetachData = () => {
    axios
      .get<Array<TodoType>>(
        "https://jsonplaceholder.typicode.com/todos"
      )
      .then((res) => setTodo(res.data))
      .catch();
  };
  return (
    <div className="App">
      <UserProfile user={user}></UserProfile>
      <Text color="red" fontSize="30px"></Text>
      <button onClick={onClickFetachData}>
        データ取得
      </button>
      {todo.map((td) => (
        <Todo
          key={td.id}
          title={td.title}
          userId={td.userId}
          completed={td.completed}
        ></Todo>
      ))}
    </div>
  );
}
