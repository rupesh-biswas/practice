import { Paper, TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { useContext } from "react";
import { DispatchContext } from "./context/todos.context";


function TodoForm(props) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState("");

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "ADD", newTodoText: value });
                reset();
            }}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                    required
                >
                </TextField>
            </form>
        </Paper>
    )
}

export default TodoForm;