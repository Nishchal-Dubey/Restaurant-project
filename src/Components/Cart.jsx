




import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return acc + price * (item.quantity || 1);
    }, 0);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">My Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="row g-4">
            {cart.map(item => (
              <div key={item.id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="text-center mb-2 fw-semibold">
                      ₹{parseInt(item.price.replace(/[^0-9]/g, '')) * (item.quantity || 1)} /-
                    </p>

                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                      >
                        -
                      </button>
                      <span className="fw-bold">{item.quantity || 1}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h4 className="mb-4">Total: ₹{calculateTotal()} /-</h4>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/shop" className="btn btn-outline-primary">
                Continue Shopping
              </Link>

              {/* ✅ Navigate to /checkout on click */}
              <Link to="/checkout" className="btn btn-success">
                Proceed to Checkout
              </Link>

              <button className="btn btn-warning" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
