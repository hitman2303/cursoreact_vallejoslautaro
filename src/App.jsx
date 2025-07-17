import Navegacion from './components/navbar';
import Home from './pages/home';
import Descuentos from './pages/Descuentos';
import Catalogo from './pages/catalogo';
import Login from './pages/login';
import ProductList from './components/cards';
import { Route,Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Cart from './pages/cart';
import { AuthProvider } from './context/AuthContext';
import CrudProductos from './components/Crud';
import Dashboard from './pages/dashboard';
// Importa los estilos de Bootstrap y tu archivo CSS personalizado
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
  <div>
      <div>   
      <AuthProvider>
      {/* 
        El AuthProvider envuelve toda la aplicación para que el contexto de autenticación esté disponible en todas partes.
        Esto permite que los componentes hijos accedan a la información de autenticación y a las funciones de inicio/cierre de sesión.
      */}

        <Navegacion />
          <Header /> {/* ← Esto se muestra siempre, en TODAS las páginas */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Descuentos' element={<Descuentos />} />
          <Route path='/catalogo' element={<Catalogo/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* 
            El componente Dashboard se renderiza cuando el usuario accede a la ruta /dashboard.
            Este componente puede mostrar información específica del usuario, como su perfil, estadísticas, etc.
          */}
          <Route path='/productos' element={<ProductList />} />
          {/*
            El componente ProductList se renderiza cuando el usuario accede a la ruta /productos.
            Este componente puede mostrar una lista de productos disponibles en la tienda.
          */}
            <Route path='/cart' element={<Cart />} /> 
                    <Route path="/Crud" element={<CrudProductos />} />
        </Routes>
            </AuthProvider>   
      </div>
    <Footer /> {/* ← También fuera del Router */}
  
  </div>
  
);

}

export default App
