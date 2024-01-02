import React, { useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/book';

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = React.useState(false)

  const { deleteBookById } = useContext(BooksContext)

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit closeEdit={handleEditClick} book={book}/>
  }
  return (
    <div className='book-show'>
      <img alt='Books' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>Edit</button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}
