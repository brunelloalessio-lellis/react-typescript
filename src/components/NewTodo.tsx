import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{
    onAddTodo: (newText:string)=>void
}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
