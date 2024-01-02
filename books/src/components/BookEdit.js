import React from 'react';
import useBooksContext from '../hooks/use-books-context';

export default function BookEdit({ book, closeEdit }) {
  const [title, setTitle] = React.useState(book.title)
  const { editBookById } = useBooksContext();

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
