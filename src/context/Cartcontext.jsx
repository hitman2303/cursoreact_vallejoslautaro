import { createContext, useContext, useState } from 'react';

const CartContext = createContext(); // Contexto para el carrito

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => { //todos los hijos de CartProvider tendrán acceso al contexto
  // Estado para el carrito
  const [cart, setCart] = useState([]); // Inicializa el carrito como un array vacío

  const añadir = (producto) => {
    setCart(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const remover = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const actualizar = (id, cantidad) => {
    if (cantidad <= 0) {
      remover(id);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, cantidad } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cart, añadir, remover, actualizar }}>
      {children} {/* Renderiza los hijos del CartProvider */}
    </CartContext.Provider>
  );
};
