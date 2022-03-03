import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

const AddBook = ({ categories }) => {
  const [bookState, setBookState] = useState({
    title: '',
    category: ' ',
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
    const { title, category } = bookState;
    if (title.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title,
        category,
      };
      dispatch(addBookApi(newBook));
      setBookState({
        title: '',
        category: ' ',
      });
    }
  };
  const { title, category } = bookState;
  return (
    <>
      <div className="form-container row">
        <h2>Add New Book</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Book Title"
              className="form-control"
              required
            />
          </div>

          <div className="col-md-4">
            <select
              value={category}
              className="form-select"
              name="category"
              onChange={onChange}
              required
            >
              <option value="" disabled hidden>
                Category
              </option>
              {categories.map((category) => (
                <option value={category.name} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary form-control"
              onClick={submitBookToStore}
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

AddBook.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default AddBook;
