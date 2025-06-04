


import React from 'react';
import { useOrder } from './OrderContext';

const Orders = () => {
  const { orders } = useOrder();

  if (orders.length === 0) {
    return (
      <div className="container my-5 py-5 text-center">
        <div className="card shadow-sm">
          <div className="card-body py-5">
            <h4 className="text-muted">No orders placed yet.</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-primary">Your Orders</h3>
      {orders.map(order => (
        <div key={order.id} className="card mb-4 shadow-sm border-0">
          <div className="card-header bg-light">
            <h5 className="mb-0">Order # {order.id}</h5>
            <small className="text-muted">Placed on: {order.date}</small>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-2">
                  <span className="badge bg-info text-dark me-2">Total Amount</span>
                  <strong>INR {order.total}</strong>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="mb-2">
                  <span className="badge bg-secondary me-2">Payment Mode</span>
                  <strong>{order.formData.payment === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</strong>
                </div>
              </div>
            </div>

            <h6 className="border-bottom pb-2">Items Ordered</h6>
            <ul className="list-group mb-3">
              {order.cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    {item.title} 
                    <span className="text-muted ms-2">(Qty: {item.quantity})</span>
                  </div>
                  <span className="badge bg-primary text-white">INR {item.price}</span>
                </li>
              ))}
            </ul>

            <div className="row mt-4">
              <div className="col-md-6">
                <h6 className="border-bottom pb-2">Customer Details</h6>
                <div className="mb-2"><strong>Name:</strong> {order.formData.name}</div>
                <div className="mb-2"><strong>Phone:</strong> {order.formData.number}</div>
                <div className="mb-2"><strong>Email:</strong> {order.formData.email}</div>
              </div>
              <div className="col-md-6">
                <h6 className="border-bottom pb-2">Shipping Address</h6>
                <address>
                  {order.formData.address1},<br />
                  {order.formData.address2 && <>{order.formData.address2},<br /></>}
                  {order.formData.city}, {order.formData.state},<br />
                  {order.formData.country} - {order.formData.pincode}
                </address>
              </div>
            </div>
          </div>
          <div className="card-footer bg-light text-end">
            <small className="text-muted">Thank you for your order!</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;