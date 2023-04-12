import useToggle from "./hooks/useToogleState";
import EditTodoForm from "./EditTodoForm";
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { memo, useContext } from "react";
import { DispatchContext } from "./context/todos.context";

function Todo(props) {
    const { id, task, completed } = props;
    const dispatch = useContext(DispatchContext);

    const [isEditing, toggleIsEditing] = useToggle(false);

    console.log("Todo Render", task);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    toggleIsEditing={toggleIsEditing} />
            ) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id })} />
                    <ListItemText
                        style={{ textDecoration: completed ? "line-through" : "none" }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => dispatch({ type: "REMOVE", id })}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )
            }
        </ListItem >
    )
}

export default memo(Todo);