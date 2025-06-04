


import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', data);
      const user = res.data.user;
      login(user);

      // ✅ Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin/adminhome');
      } else {
        navigate('/');
      }
    } catch (err) {
      alert('Invalid credentials');
    }
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '50%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('email')} placeholder="Email" className="form-control mb-3" />
          <input type="password" {...register('password')} placeholder="Password" className="form-control mb-3" />
          <button className="btn btn-primary w-100 mb-2">Login</button>
        </form>
        <div className="text-center">
          <span>Don't have an account? </span>
          <Link to="/register" className="btn btn-outline-secondary btn-sm">Register</Link>
        </div>
      </div>
    </div>
  );

};

export default Login;




