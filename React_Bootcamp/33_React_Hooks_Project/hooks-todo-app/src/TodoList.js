import React, { useContext } from "react";
import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

function TodoList() {
    const todos = useContext(TodosContext);

    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <React.Fragment key={i}>
                            <Todo
                                key={todo.id}
                                {...todo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment >
                    ))}
                </List>
            </Paper>
        )
    };
    return null;
}

export default TodoList;