import Navegacion from './componentes/navbar';
import Home from './pages/home';
import Descuentos from './pages/Descuentos';
import Catalogo from './pages/catalogo';
import Login from './pages/login';
import ProductList from './componentes/cards';
import { Route,Routes } from 'react-router-dom';
import Footer from './componentes/footer';
import Header from './componentes/header';
import Cart from './pages/cart';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
  <div>
      <div>
        <Navegacion />
          <Header /> {/* ← Esto se muestra siempre, en TODAS las páginas */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Descuentos' element={<Descuentos />} />
          <Route path='/catalogo' element={<Catalogo/>} />
          <Route path='/login' element={<Login />} />
          <Route path="/products" element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />  
        </Routes>
      </div>
    <Footer /> {/* ← También fuera del Router */}
  </div>
);

}

export default App