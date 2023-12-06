import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, {id: Math.round(Math.random() * 10000), title}]
    setBooks(updatedBooks)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
