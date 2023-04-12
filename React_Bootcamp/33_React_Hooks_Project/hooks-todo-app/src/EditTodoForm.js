import { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@mui/material";
import { DispatchContext } from "./context/todos.context";


function EditTodoForm(props) {
    const { id, task, toggleIsEditing } = props

    const dispatch = useContext(DispatchContext);

    const [value, handleChange, reset] = useInputState(task);

    console.log("Edit Form Render", task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "EDIT", id, newTodoText: value });
            reset();
            toggleIsEditing();
        }}
            style={{ marginLeft: "1rem", width: "50%" }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm;