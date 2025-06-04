

import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const totalAmount = cart.reduce((sum, item) => {
    const price = parseInt(item.price.toString().replace(/[^0-9]/g, ''));
    return sum + price * (item.quantity || 1);
  }, 0);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const {
      name,
      number,
      email,
      payment,
      address1,
      address2,
      city,
      state,
      country,
      pincode
    } = data;

    const fullAddress = `${address1}, ${address2 ? address2 + ', ' : ''}${city}, ${state}, ${country} - ${pincode}`;

    const orderData = {
      name,
      email,
      phone: number,
      payment,
      address: fullAddress,
      cart,
      total: totalAmount,
    };

    try {
      await axios.post('http://localhost:5000/api/orders', orderData);
      clearCart();
      alert('🎉 Order placed successfully!');
      navigate('/orders');
    } catch (error) {
      console.error("Order error:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '600px' }}>
        <h4 className="mb-3">Your Items</h4>
        <div className="d-flex flex-wrap gap-3 mb-3">
          {cart.map((item) => (
            <div key={item.id} className="d-flex flex-column align-items-center">
              <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
              <small className="text-center">{item.title} ({item.quantity})</small>
            </div>
          ))}
        </div>

        <div className="text-center fw-bold fs-5 bg-warning py-2 mb-4">
          Total Amount Payable: ₹{totalAmount}
        </div>

        <h5 className="mb-3">Enter Your Details</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" {...register('name', { required: 'Name is required' })} />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input className="form-control" {...register('number', { required: 'Phone number is required' })} />
            {errors.number && <small className="text-danger">{errors.number.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" {...register('email', { required: 'Email is required' })} />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select className="form-select" {...register('payment', { required: 'Select a payment method' })}>
              <option value="">Select payment method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="online">Online Payment</option>
            </select>
            {errors.payment && <small className="text-danger">{errors.payment.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Address Line 1</label>
            <input className="form-control" {...register('address1', { required: 'Address Line 1 is required' })} />
            {errors.address1 && <small className="text-danger">{errors.address1.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Address Line 2</label>
            <input className="form-control" {...register('address2')} />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input className="form-control" {...register('city', { required: 'City is required' })} />
            {errors.city && <small className="text-danger">{errors.city.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">State</label>
            <input className="form-control" {...register('state', { required: 'State is required' })} />
            {errors.state && <small className="text-danger">{errors.state.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <input className="form-control" {...register('country', { required: 'Country is required' })} />
            {errors.country && <small className="text-danger">{errors.country.message}</small>}
          </div>

          <div className="mb-4">
            <label className="form-label">Pincode</label>
            <input className="form-control" {...register('pincode', { required: 'Pincode is required' })} />
            {errors.pincode && <small className="text-danger">{errors.pincode.message}</small>}
          </div>

          <button type="submit" className="btn btn-warning w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Placing Order...' : 'ORDER NOW'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
