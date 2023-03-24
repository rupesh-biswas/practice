import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

function TodoList(props) {
    const [todos, setTodos] = useState([]);


    function addTodo(task) {
        const newTodo = { id: uuidv4(), task: task, completed: false }
        setTodos([...todos, newTodo]);
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    function updateTodo(id, updatedTask) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function toogleCompletion(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function renderTodos() {
        return todos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={() => removeTodo(todo.id)}
            updateTodo={updateTodo}
            toggleTodo={toogleCompletion}
        />
        );
    }

    return (
        <div className="TodoList">
            <h1>
                Todo List!
                <span>A Simple React Todo List App.</span>
            </h1>
            <ul>
                {renderTodos()}
            </ul>
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList;