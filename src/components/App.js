import { Route, Routes } from 'react-router-dom';
import Books from '../pages/Books';
import Categories from '../pages/Categories';
import Header from './Header';

const App = () => (
  <>
    <div className="container">
      <div className="panel-bg">
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
