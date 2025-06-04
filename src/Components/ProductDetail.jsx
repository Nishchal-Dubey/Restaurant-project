


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';

const productData = {
  1: {
    id: 1,
    title: "Matar Paneer",
    price: "₹120/-",
    image: "Matar-Paneer-Sabzi-Marathi-Recipe-feature.jpg",
    description: "Delicious North Indian curry with cottage cheese and peas.",
  },
  2: {
    id: 2,
    title: "Dosa",
    price: "₹90/-",
    image: "00078c3a5782b1367a6cdfcc03f710a9.jpg",
    description: "Crispy South Indian rice pancake served with chutney.",
  },
  3: {
    id: 3,
    title: "Vada Paav",
    price: "₹60/-",
    image: "desktop-wallpaper-vada-pav.jpg",
    description: "Mumbai’s favorite street food with a spicy potato filling.",
  },
  4: {
    id: 4,
    title: "Veg Biryani",
    price: "₹180/-",
    image: "easy-vegetable-biryani.jpg",
    description: "Fragrant basmati rice cooked with mixed vegetables and spices.",
  },
  5: {
    id: 5,
    title: "Pav Bhaji",
    price: "₹150/-",
    image: "OIP.jpeg",
    description: "Spiced mashed vegetables served with butter-toasted buns.",
  },
  6: {
    id: 6,
    title: "Samosa",
    price: "₹30/-",
    image: "2069599.webp",
    description: "Crispy pastry filled with spicy potatoes and peas.",
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center py-5">Product not found</h2>;
  }

  const handleAddToWishlist = () => {
    addToWishlist(product);
    alert(`${product.title} added to wishlist`);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: parseInt(quantity) });
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="container py-5 d-flex flex-column flex-md-row align-items-center">
      <div className="me-md-5 mb-4 mb-md-0">
        <img
          src={`/${product.image}`}
          alt={product.title}
          className="img-fluid rounded"
          style={{ maxWidth: '400px' }}
        />
      </div>
      <div>
        <h3 className="text-warning">{product.title}</h3>
        <h5 className="mb-3 text-dark">{product.price}</h5>
        <p>{product.description}</p>
        <div className="d-flex align-items-center mt-3">
          <button className="btn btn-outline-dark me-3" onClick={handleAddToWishlist}>
            <i className="bi bi-heart"></i>
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-control w-25 me-3"
          />
          <button className="btn btn-warning" onClick={handleAddToCart}>
            <i className="bi bi-cart-fill"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
