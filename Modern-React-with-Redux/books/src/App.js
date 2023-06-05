import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import BookCreate from "./componenets/BookCreate";
import BookList from "./componenets/BookList";
import axios from "axios";

export default function App() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    async function createBook(title) {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    async function editBookById(id, newTitle) {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const newBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book
        })
        setBooks(newBooks);
    }

    async function deleteBookById(id) {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
    }

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onSubmit={createBook} />
        </div>
    )
}