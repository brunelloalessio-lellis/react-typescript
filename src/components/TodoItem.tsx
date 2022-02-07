import classes from "./TodoItem.module.css";
import Todo from "../models/todo";

const TodoItem: React.FC<{
  todo: Todo;
  onItemTap: (arg0: Todo) => void;
}> = (props) => {
  const onClickHandler = () => {
    props.onItemTap(props.todo);
  };

  return (
    <li onClick={onClickHandler} className={classes.item}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
