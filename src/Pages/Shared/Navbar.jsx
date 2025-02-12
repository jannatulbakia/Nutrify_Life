import React from 'react';

const Navbar = ({ role }) => {
  return (
    <div className="navbar bg-gradient-to-r from-mochaBrown to-lightTan">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <li><a href="/">Home</a></li>
            <li><a href="/diet">Dietary Guide</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/caltrack">Calorie Track</a></li>
            <li><a href='/sickfood'>Sickness Diet</a></li>
            {role === 'admin' && <li><a href='/admin/adminhome'>Dash Board</a></li>}
            <li><a>Review</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-light">NutrifyLife</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/'>Home</a></li>
          <li><a href="/diet">Dietary Guide</a></li>
          <li><a href="/caltrack">Calory Track</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href='/sickfood'>Sickness Diet</a></li>
          <li><a href='/Nutryproducts'>Transform food</a></li>
          {role === 'admin' && <li><a href='/admin/adminhome'>Dash Board</a></li>}
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