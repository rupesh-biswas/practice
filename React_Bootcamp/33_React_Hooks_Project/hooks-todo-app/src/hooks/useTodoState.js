import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

function useTodoState(initialTodos) {

    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            // filter out remove todos
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            // call setTodos with new todos array
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTodoText) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTodoText } : todo
            );
            setTodos(updatedTodos);
        }
    }
}

export default useTodoState;