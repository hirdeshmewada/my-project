
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer   from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import FilterData from './pages/FilterData';
import Product from './pages/Product';

function App() {
  
  return (

  <BrowserRouter>

 <Navbar />

 <Routes >
 <Route path="/" element={<Home />}></Route>
 <Route path="/shop" element={<Product/>}></Route>
 <Route path="/product" element={<Product/>}></Route>
 <Route path="/filter-data" element={<FilterData/>}></Route>
 </Routes>

 <Footer/>

  </BrowserRouter>
  
  );
}

export default App;
