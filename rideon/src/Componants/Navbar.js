import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMyBooking =(e)=>{
        const token=localStorage.getItem('access_token');
        if (!token){
          e.preventDefault();
            navigate('/login')
        }
    }


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);
  });

  const handleAuthClick = () => {
    if (isLoggedIn) {

      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className='navbar'>
      <h2>RideON</h2>
      <div className='hamburger' onClick={() => setOpen(!open)}>☰</div>
      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link to='/'>Home</Link>
        <Link to='/bikes'>Bikes</Link>
        <Link to='/mybooking' onClick={handleMyBooking}>My booking</Link>
        <button className='login-btn' onClick={handleAuthClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
