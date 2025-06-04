

import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminNavbar.css';
import { useAuth } from '../Components/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function AdminNavbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg admin-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center admin-logo-wrapper">
          <img src="/white-india.png" alt="Logo" className="admin-logo" />
        </NavLink>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase fw-bold">
            <li className="nav-item">
              <NavLink to="/admin" end className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/orders" className="nav-link">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/users" className="nav-link">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/messages" className="nav-link">
                Messages
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Admin user dropdown */}
        <div className="dropdown admin-user-dropdown">
          <button
            className="btn btn-outline-light dropdown-toggle"
            type="button"
            id="adminDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="adminDropdown">
            <li className="dropdown-item text-dark">Admin: {user?.name || 'Unknown'}</li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button className="dropdown-item text-danger" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
