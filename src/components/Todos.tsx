import React from "react";
import Todo from "../models/todo";
import TodoItem from './TodoItem';
import classes from './Todos.module.css'

const Todos: React.FC<{
  items: Todo[];
  onTodoRemove: (arg0:Todo) => void
}> = (props) => {

    const itemTapHandler = (todo:Todo) =>{
        props.onTodoRemove(todo)
    }

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => <TodoItem key={item.id} todo={item} onItemTap={itemTapHandler} />)}
    </ul>
  );
};

export default Todos;
