import React from 'react'

export default function BookEdit({ book, onEdit, closeEdit }) {
  const [title, setTitle] = React.useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
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
