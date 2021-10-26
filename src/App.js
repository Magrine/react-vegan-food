import './App.css';
import Foods from './components/foodList/Food';
import Header from './components/header/Header';
import Cart from './components/cart/cart';
import CartProvider from './Store/CartProvider';
import { useState } from 'react';

function App() {
  const [inCart, setInCart] = useState(false);

  const showCart = () =>{
      setInCart(true);
  }
  const hideCart = () =>{
    setInCart(false);
  }

  return (
    <CartProvider>
      {inCart && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <Foods />
    </CartProvider>
  );
}

export default App;
