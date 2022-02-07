import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);

    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  return (
    <>
      <NewTodo onAddTodo={addNewTodo} />
      <Todos items={todos} />
    </>
  );
}

export default App;
