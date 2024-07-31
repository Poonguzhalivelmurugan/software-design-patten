import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import realEstateImage from '../assets/real-estate.jpg';
import { login } from '../redux/userSlice';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (email === 'poonguzhalidams@gmail.com' && password === 'admin123') {
      dispatch(login({ email, role: 'admin' }));
      navigate('/admin');
    } else if (storedUser && email === storedUser.email && password === storedUser.password) {
      dispatch(login({ email, role: 'user' }));
      navigate('/');
    } else {
      alert('Invalid credentials');
      navigate('/signup');
    }
  };

  if (isAuthenticated) {
    navigate('/');
  }

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-image">
          <img src={realEstateImage} alt="Real Estate" />
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
