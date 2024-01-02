import React, { useContext } from 'react';
import BooksContext from '../context/book';

export default function BookEdit({ book, closeEdit }) {
  const [title, setTitle] = React.useState(book.title)
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    closeEdit()
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange}/>
      <button className='button is-pirmary'>Save</button>
    </form>
  )
}
