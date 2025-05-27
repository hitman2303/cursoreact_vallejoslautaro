import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';  // 👈 CAMBIA ESTO
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>  {/* 👈 CAMBIE ESTO A VER SI LO AGARRA GITHUB */}
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </StrictMode>,
)
