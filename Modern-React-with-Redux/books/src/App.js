import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import BookCreate from "./componenets/BookCreate";
import BookList from "./componenets/BookList";

export default function App() {
    const [books, setBooks] = useState([]);

    function createBook(title) {
        setBooks([...books, {
            id: uuidv4(),
            title
        }])
    }

    function deleteBookById(id) {
        setBooks(books.filter((book) => book.id !== id))
    }

    function editBookById(id, newTitle) {
        const newBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBooks(newBooks);
    }

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onSubmit={createBook} />
        </div>
    )
}