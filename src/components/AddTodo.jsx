import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { TextField, Button } from "@mui/material";

function AddTodo() {
  const [input, setInput] = useState();

  //we use dispatch to use reducers inside the components
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="my-12">
      <div className="flex flex-row space-x-3">
        <TextField
          fullWidth
          color="secondary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></TextField>

        <Button
          className="w-60"
          color="secondary"
          variant="contained"
          type="submit"
        >
          Create Task
        </Button>
      </div>
    </form>
  );
}

export default AddTodo;
