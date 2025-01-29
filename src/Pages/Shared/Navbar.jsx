import React from 'react';

const Navbar = () => {
  return (
    <>
      <style>
        {`
          /* Custom gradient colors */
          :root {
            --mocha-brown: #4e3629;
            --light-tan: #c9b59a;
            --light: #f7f7f7; /* Light color for contrast */
            --btn-hover: #c9b59a; /* Button hover color */
          }

          /* Apply gradient background to the navbar */
          .navbar {
            background: linear-gradient(to right, var(--mocha-brown), var(--light-tan));
            color: var(--light);
            padding: 1rem;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          /* Styling the navbar brand (NutrifyLife) */
          .navbar-start a {
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
            color: var(--light);
            transition: color 0.3s ease;
          }

          .navbar-start a:hover {
            color: var(--mocha-brown);
          }

          /* Dropdown menu for mobile */
          .dropdown-content {
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
            color: var(--mocha-brown);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
          }

          .dropdown-content:hover {
            background-color: rgba(200, 200, 200, 0.9); /* Lighten the background on hover */
          }

          .menu li a {
            font-size: 1rem;
            color: white;
            padding: 10px;
            transition: color 0.3s ease;
          }

          .menu li a:hover {
            color: var(--light-tan);
          }

          /* Navbar center links */
          .navbar-center ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .navbar-center a {
            font-size: 1rem;
            color: var(--light);
            padding: 10px 20px;
            text-transform: uppercase;
            border-radius: 20px;
            transition: background-color 0.3s, color 0.3s;
          }

          .navbar-center a:hover {
            background-color: var(--mocha-brown);
            color: var(--light);
          }

          /* Updated details dropdown color */
          .detalis {
            background-color: var(--light-tan); /* Change background color to light tan */
            color: var(--mocha-brown); /* Text color */
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            padding: 15px; /* Increase padding to make the dropdown box bigger */
            width: 200px; /* Increase width for a more spacious dropdown */
            display: flex;
            flex-direction: column; /* Stack the items vertically */
            gap: 10px; /* Add space between the items */
          }

          .detalis li a {
            font-size: 1.1rem; /* Slightly increase font size for better readability */
            color: var(--mocha-brown); /* Change the color of dropdown items to mocha brown */
            padding: 12px; /* Increase padding for a larger clickable area */
            transition: color 0.3s ease;
            text-align: left; /* Align text to the left */
          }

          .detalis li a:hover {
            color: var(--light-tan);
            background-color: var(--mocha-brown); /* Light tan background on hover */
          }

          /* Sign-up button */
          .navbar-end .btn-primary {
            background-color: var(--mocha-brown);
            color: var(--light);
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 1.2rem;
            transition: background-color 0.3s, transform 0.3s ease;
          }

          .navbar-end .btn-primary:hover {
            background-color: var(--light-tan);
            transform: scale(1.05);
          }

          /* For mobile - when the menu is open, adjust the dropdown content */
          @media (max-width: 768px) {
            .navbar-start a {
              font-size: 1.5rem;
            }

            .menu {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            .menu li a {
              font-size: 1.2rem;
              color: var(--mocha-brown);
              padding: 12px;
              text-align: center;
            }

            .menu li a:hover {
              color: var(--light-tan);
            }
          }
        `}
      </style>

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
            <li><a>Review</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/signup' className="btn btn-primary">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
