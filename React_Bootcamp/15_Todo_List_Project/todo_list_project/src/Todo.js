import { useEffect, useRef, useState } from "react";
import './Todo.css';

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value;
//     }, [value]);
//     return ref.current;
// }

function Todo(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(props.task);
    // const prevTodos = usePrevious(props);
    // console.log(prevTodos);




    function toggleForm() {
        setIsEditing(!isEditing);
    }

    function handleUpdate(evt) {
        evt.preventDefault();
        // console.log(evt.target.querySelector('input[name="task"]').id);
        props.updateTodo(props.id, task);
        setIsEditing(false);
    }

    function handleToggle(evt) {
        props.toggleTodo(props.id);
    }

    useEffect(() => {
        console.log("Component has been rendered");
        return () => {
            console.log("In component will unmount");
        };
    });

    let result;
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input
                        type="text"
                        id={props.id}
                        name='task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    >
                    </input>
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
        result = (
            <div className="Todo">
                <li className={`Todo-task ${props.completed ? 'completed' : ''}`} onClick={handleToggle}>
                    {props.task}
                </li>
                <div className="Todo-buttons">
                    <button onClick={toggleForm}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={props.removeTodo}>
                        <i className="fas fa-trash" />
                    </button>
                </div>
            </div>
        )
    }


    return result;
}

export default Todo;