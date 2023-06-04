import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    function handleDeleteClick() {
        onDelete(book.id);
    }

    function handleEditClick() {
        setShowEdit(!showEdit);
    }

    function handleSubmit(id, newTitle) {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    return (
        <div className="book-show">
            <img alt={book.title} src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>
                {
                    showEdit ?
                        <BookEdit book={book} onSubmit={handleSubmit} />
                        : <h3>{book.title}</h3>
                }
            </div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}