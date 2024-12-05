/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleCompleteTodo,
} from "../features/todo/todoSlice";
import { useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from '@mui/icons-material/Close';

function Todos({ task }) {
  //for using the reducers we have first initialized the dispatch using useDispatch
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(updateTodo({ id: task.id, text: newText }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(task.text);
  };

  return (
    <>
      <ul className="list-none">
        <li
          className="mt-4 flex justify-between items-center bg-stone-700 px-4 py-4 rounded"
          key={task.id}
        >
          <Checkbox
            color="secondary"
            checked={task.completed}
            onChange={() => dispatch(toggleCompleteTodo(task.id))}
          />
          {isEditing ? (
            <div className="w-full ml-2 ">
              <TextField
                className="text-black h-8 justify-center "
                focused
                fullWidth
                value={newText}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) => setNewText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSave();
                  if (e.key === "Escape") handleCancel();
                }}
              />
            </div>
          ) : (
            <>
              <p className="text-white grow text-left mx-5 py-2 font-sans font-medium break-words sm:text-xl">
                {task.text}
              </p>
            </>
          )}

          {isEditing ? (
            <div className="flex space-x-4 pl-3">
              <Button
                color="secondary"
                variant="contained"
                onClick={handleSave}
                startIcon={<SaveIcon />}
              >
                <span className="hidden sm:block">Save</span>
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleCancel}
                startIcon={<CloseIcon />}
              >
                <span className="hidden sm:block">Cancel</span>
              </Button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Button
                color="secondary"
                variant="contained"
                onClick={handleEdit}
                disabled={task.completed}
                startIcon={<EditIcon />}
              >
                <span className="hidden sm:block">Edit</span>
              </Button>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(removeTodo(task.id))}
              >
                <span className="hidden sm:block">Delete</span>
              </Button>
            </div>
          )}
        </li>
      </ul>
    </>
  );
}

export default Todos;
