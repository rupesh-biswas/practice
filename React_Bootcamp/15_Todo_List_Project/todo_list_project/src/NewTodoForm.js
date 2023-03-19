import { useState } from "react";
import './NewTodoForm.css'

function NewTodoForm(props) {
    const [newTodo, setNewTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="newTodo">New Todo</label>
            <input type="text"
                id="newTodo"
                name="newTodo"
                placeholder="New Todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                required
            >
            </input>
            <button>ADD TODO</button>
        </form>
    )
}

export default NewTodoForm;