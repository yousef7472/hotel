import { Outlet } from 'react-router-dom';
import CartProvider from '../store/CartProvider';
import Navbar from '../common/navbar/Navbar';
import Cart from '../common/Cart/Cart';
import { useState } from 'react';
import { AuthProvider } from '../context/AuthContext';


function RootLayout() {
  const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };

  return (
    <AuthProvider>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <main>
        <Outlet />
      </main>
    </CartProvider>
    </AuthProvider>
  );
}

export default RootLayout;