import Todo from "../models/todo";
import React, { useState } from "react";

type TodoContextType = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todo: Todo) => void;
};

export const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todo: Todo) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);

    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  const onTodoRemove = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todoItem) => todo.id !== todoItem.id)
    );
  };

  const contextValues: TodoContextType = {
    items: todos,
    addTodo: addNewTodo,
    removeTodo: onTodoRemove,
  };

  return (
    <TodosContext.Provider value={contextValues}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider