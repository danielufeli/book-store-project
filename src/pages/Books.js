import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AddBook from '../components/AddBook';
import AllBook from '../components/AllBooks';

const Books = () => {
  const categories = useSelector((state) => state.categoriesReducer, shallowEqual);
  const books = useSelector((state) => state.booksReducer, shallowEqual);

  return (
    <>
      <div>
        <AllBook books={books} />
        <AddBook categories={categories} />
      </div>
    </>
  );
};

export default Books;
