


import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <>
          <div className="row g-4">
            {wishlist.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm d-flex flex-column">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text text-center fw-bold">{product.price}</p>

                    <div className="d-flex justify-content-around my-2">
                      {/* Product Detail Icon */}
                      <Link to={`/product/${product.id}`} className="btn btn-outline-primary">
                        <i className="bi bi-eye"></i>
                      </Link>

                      {/* Add to Cart Icon */}
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>

                      {/* Remove from Wishlist */}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromWishlist(product.id)}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="d-flex justify-content-between mt-5">
            <button className="btn btn-outline-danger" onClick={clearWishlist}>
              Clear All
            </button>

            <Link to="/menu" className="btn btn-success">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
