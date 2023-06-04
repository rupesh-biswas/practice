import { useState } from "react"

export default function BookCreate({ onSubmit }) {
    const [title, setTitle] = useState("");

    function handleChange(evt) {
        setTitle(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(title);
        setTitle("");
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Enter book title</label>
                <input className="input" id="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}