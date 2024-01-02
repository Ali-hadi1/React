import React, { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/book';

export default function BookList({ books, onDelete, onEdit}) {
	const { count, incrementCount } = useContext(BooksContext);
	const renderedBooks = books.map((book) => {
		return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
	})
	return (
		<div className='book-list'>
			{count}
			<button onClick={incrementCount}>Click</button>
			{renderedBooks}
		 </div>
	)
}
