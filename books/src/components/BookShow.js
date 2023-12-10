import React from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = React.useState(false)

  const handleDeleteClick = () => {
    onDelete(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit closeEdit={handleEditClick} onEdit={onEdit} book={book}/>
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
