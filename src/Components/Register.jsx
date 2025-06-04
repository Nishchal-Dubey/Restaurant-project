// Register.jsx
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', data);
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

    return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '50%' }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} placeholder="Name" className="form-control mb-3" />
          <input {...register('email')} placeholder="Email" className="form-control mb-3" />
          <input type="password" {...register('password')} placeholder="Password" className="form-control mb-3" />
          <button className="btn btn-success w-100 mb-2">Register</button>
        </form>
        <div className="text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="btn btn-outline-primary btn-sm">Login</Link>
        </div>
      </div>
    </div>
  );

};

export default Register;


