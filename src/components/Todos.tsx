import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const itemTapHandler = (todo: Todo) => {
    todosCtx.removeTodo(todo);
  };

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} todo={item} onItemTap={itemTapHandler} />
      ))}
    </ul>
  );
};

export default Todos;
