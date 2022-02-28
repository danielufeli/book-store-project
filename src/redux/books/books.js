import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';

const initialState = [
  {
    id: uuidv4(),
    name: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    name: 'Dune',
    category: 'Science Fiction',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    name: 'Capital in the Twenty-First Century',
    category: 'economy',
    author: 'Frank Herbert',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
