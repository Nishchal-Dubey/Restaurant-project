


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { WishlistProvider } from './Components/WishlistContext';
import { CartProvider } from './Components/CartContext';
import { OrderProvider } from './Components/OrderContext'; // ✅ Import OrderProvider

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <OrderProvider> {/* ✅ Wrap App with OrderProvider */}
          <App />
        </OrderProvider>
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);
