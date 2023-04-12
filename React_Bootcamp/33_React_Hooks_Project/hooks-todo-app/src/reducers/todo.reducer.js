import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), task: action.newTodoText, completed: false }]
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id)
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTodoText } : todo
            );
    }

}

export default todoReducer;

// {type:"ADD", newTodoText:"asdwadwa"}
// {type:"REMOVE", id:12321}
// {type:"TOGGLE", id:1234}
// {type:"EDIT", newTodoText:"asdsad",id:1234}

