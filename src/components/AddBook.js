import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = ({ categories }) => {
  const [bookState, setBookState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const { title, author, category } = bookState;
    if (title.trim() && author.trim()) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        category,
      };
      setBookState({
        title: '',
        author: '',
        category: '',
      });
      dispatch(addBook(newBook));
    } else {
      alert('Please Enter a Value');
    }
  };
  const { title, author, category } = bookState;
  return (
    <>
      <div>
        <h1>Add New Book</h1>
        <form>
          <input type="text" name="title" value={title} onChange={onChange} placeholder="Book Title" />
          <input type="text" name="author" value={author} onChange={onChange} placeholder="Book Author" />
          <select value={category} name="category" onChange={onChange}>
            <option value="Category" disabled>
              Category
            </option>
            {
              categories
                .map((category) => (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                ))
            }

          </select>
          <button type="submit" onClick={submitBookToStore}>Add Book</button>
        </form>
      </div>
    </>
  );
};

AddBook.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default AddBook;
