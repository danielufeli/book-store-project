import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';

const AllBook = () => {
  const books = useSelector((state) => state.booksReducer, shallowEqual);
  useEffect(() => {
    getBooks();
  }, [books]);
  return (
    <>
      <div className="books">
        {
        books.map((book) => <BookItem book={book} key={book.id} />)
      }
      </div>

    </>
  );
};

export default AllBook;
