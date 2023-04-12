import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "./context/todos.context";


function TodoApp() {


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
                    <TodoProvider>
                        <TodoForm />
                        <TodoList />
                    </TodoProvider>
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