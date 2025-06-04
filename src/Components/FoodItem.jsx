
import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext'; // ✅ Cart hook
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const products = [
  {
    id: 1,
    title: "Matar Paneer",
    price: "₹120/-",
    image: "Matar-Paneer-Sabzi-Marathi-Recipe-feature.jpg",
  },
  {
    id: 2,
    title: "Dosa",
    price: "₹90/-",
    image: "00078c3a5782b1367a6cdfcc03f710a9.jpg",
  },
  {
    id: 3,
    title: "Vada Paav",
    price: "₹60/-",
    image: "desktop-wallpaper-vada-pav.jpg",
  },
  {
    id: 4,
    title: "Veg Biryani",
    price: "₹180/-",
    image: "easy-vegetable-biryani.jpg",
  },
  {
    id: 5,
    title: "Pav Bhaji",
    price: "₹150/-",
    image: "OIP.jpeg",
  },
  {
    id: 6,
    title: "Samosa",
    price: "₹30/-",
    image: "2069599.webp",
  },
];

export default function FoodItem() {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlistClick = (product) => {
    addToWishlist(product);
    alert(`${product.title} added to wishlist`);
  };

  const handleCartClick = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart`);
  };

  return (
    <section className="py-5 text-center bg-light">
      <div className="container">
        <h2 className="mb-4 fw-bold">SHOP BEST SELLERS</h2>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4">
              <div className="card shadow-sm h-100 position-relative">
                
                {/* Price Label */}
                <div
                  className="position-absolute top-0 start-0 m-2 px-2 py-1 fw-bold fs-6 text-white rounded"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                >
                  {product.price}
                </div>

                {/* Product Image */}
                <div className="overflow-hidden" style={{ height: '250px' }}>
                  <img
                    src={product.image}
                    className="card-img-top w-100 h-100"
                    alt={product.title}
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Product Name */}
                <div className="px-3 pt-3 pb-1">
                  <h5 className="text-uppercase fw-semibold">{product.title}</h5>
                </div>

                {/* Action Icons */}
                <div
                  className="d-flex justify-content-around py-3 rounded-bottom"
                  style={{ backgroundColor: '#ff6f61' }} // custom color
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-link text-white fs-5"
                    title="View Product"
                  >
                    <i className="bi bi-eye-fill"></i>
                  </Link>

                  <button
                    className="btn btn-link text-white fs-5"
                    title="Add to Wishlist"
                    onClick={() => handleWishlistClick(product)}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </button>

                  <button
                    className="btn btn-link text-white fs-5"
                    title="Add to Cart"
                    onClick={() => handleCartClick(product)}
                  >
                    <i className="bi bi-cart-plus-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

