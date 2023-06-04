import { useState } from "react"

export default function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    function handleChange(evt) {
        setTitle(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label htmlFor="input">Enter book title</label>
            <input id="input" className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}