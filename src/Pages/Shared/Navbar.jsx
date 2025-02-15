import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ role }) => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content">
            <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
            <li className={location.pathname === "/diet" ? "active" : ""}><Link to="/diet">Dietary Guide</Link></li>
            <li className={location.pathname === "/caltrack" ? "active" : ""}><Link to="/caltrack">Calorie Track</Link></li>
            <li className={location.pathname === "/profile" ? "active" : ""}><Link to="/profile">Profile</Link></li>
            <li className={location.pathname === "/sickfood" ? "active" : ""}><Link to="/sickfood">Sickness Diet</Link></li>
            {role === 'admin' && <li><Link to="/admin/adminhome">Dashboard</Link></li>}
            <li className={location.pathname === "/review" ? "active" : ""}><Link to="/review">Review</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-light">NutrifyLife</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
          <li className={location.pathname === "/diet" ? "active" : ""}><Link to="/diet">Dietary Guide</Link></li>
          <li className={location.pathname === "/caltrack" ? "active" : ""}><Link to="/caltrack">Calorie Track</Link></li>
          <li className={location.pathname === "/profile" ? "active" : ""}><Link to="/profile">Profile</Link></li>
          <li className={location.pathname === "/sickfood" ? "active" : ""}><Link to="/sickfood">Sickness Diet</Link></li>
          <li className={location.pathname === "/Nutryproducts" ? "active" : ""}><Link to="/Nutryproducts">Transform Food</Link></li>
          {role === 'admin' && <li><Link to="/admin/adminhome">Dashboard</Link></li>}
          <li className={location.pathname === "/review" ? "active" : ""}><Link to="/review">Review</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  );
};

export default Navbar;
