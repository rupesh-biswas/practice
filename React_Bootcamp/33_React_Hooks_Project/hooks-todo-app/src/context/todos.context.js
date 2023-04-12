import { createContext } from "react";
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageStateReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

// const initialTodos = [
//     { id: 1, task: "Clean Fish Tank", completed: false },
//     { id: 2, task: "Wash Car", completed: true },
//     { id: 3, task: "Grow Beard", completed: false },
// ];
const initialTodos = [];

export function TodoProvider(props) {
    const [todos, dispatch] = useLocalStorageStateReducer("todos", initialTodos, todoReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}