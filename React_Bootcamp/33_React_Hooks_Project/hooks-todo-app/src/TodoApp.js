import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import useTodoState from "./hooks/useTodoState";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function TodoApp() {

    // const initialTodos = [
    //     { id: 1, task: "Clean Fish Tank", completed: false },
    //     { id: 2, task: "Wash Car", completed: true },
    //     { id: 3, task: "Grow Beard", completed: false },
    // ]

    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState("");


    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100dvh",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color={"inherit"}>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>


    )
}

export default TodoApp;

// - TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem