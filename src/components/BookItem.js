import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookCall } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = ({ book: { id, category, title } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="book container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="col">
              <span>{category}</span>
              <h5>{title}</h5>
              <div className="col-12 author">James Alero</div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Comments
              </button>
              <span className="line-2" />
              <button
                type="button"
                className="btn"
                onClick={() => dispatch(removeBookCall(id))}
              >
                Remove
              </button>
              <span className="line-2" />
              <button type="button" className="btn">
                Edit
              </button>
            </div>
          </div>
          <div className="col-md-5 col-lg-3">
            <div className="book-oval">
              <div className="bar-p">
                <CircularProgressbar value="55" />
              </div>
              <div>
                <div className="percent">55%</div>
                <div className="completed">Completed</div>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-lg-1 d-none d-md-block">
            <div className="line-1" />
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="c-chapter">CURRENT CHAPTER</h5>
                <h4 className="chapter">
                  Introduction
                </h4>
                <button type="button" className="btn btn-primary"> UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
