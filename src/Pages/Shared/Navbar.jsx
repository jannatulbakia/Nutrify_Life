import React, { useEffect, useState } from 'react';
import './Navbar.css';  

const Navbar = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [role, setRole] = useState(null);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      setRole(parsedData.role); 
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
            onClick={toggleMenu} 
          >  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" 
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${isMenuVisible ? 'show' : ''}`}
          >
            <li><a href="/">Home</a></li>
            <li><a href="/diet">Dietary Guide</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/caltrack">Calorie Track</a></li>
            <li><a href='/sickfood'>Sickness Diet</a></li>
            {role === 'admin' && <li><a href='/admin/adminhome'>Dashboard</a></li>}
            <li><a>Review</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-lg text-light">NutrifyLife</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/'>Home</a></li>
          <li><a href="/diet">Dietary Guide</a></li>
          <li><a href="/caltrack">Calorie Track</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href='/sickfood'>Sickness Diet</a></li>
          <li><a href='/Nutryproducts'>Transform Food</a></li>
          {role === 'admin' && <li><a href='/admin/adminhome'>Dashboard</a></li>}
          <li><a>Review</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href='/login' className="btn btn-primary">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
