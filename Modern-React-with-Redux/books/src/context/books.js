import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async function () {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, [])

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
        await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
    }

    async function createBook(title) {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;