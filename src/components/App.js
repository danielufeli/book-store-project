import { Route, Routes } from 'react-router-dom';
import Books from '../pages/Books';
import Categories from '../pages/Categories';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <div className="container" data-testid="main">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);

export default App;
