import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SelectedProducts from './components/SelectedProducts';
import ShowProducts from './components/ShowProducts';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='product/:id' element={<SelectedProducts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
