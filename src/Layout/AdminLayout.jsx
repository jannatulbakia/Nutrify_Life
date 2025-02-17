import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "./AdminLayout.css"; 

const AdminLayout = () => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <h1 className="admin-title">Admin</h1>
                <nav className="admin-nav">
                    <ul>
                        <li><Link to="/admin/adminhome" className="admin-link">Home</Link></li>
                        <li><Link to="/admin/userdetails" className="admin-link">Users</Link></li>
                        <li><Link to="/admin/adminabout" className="admin-link">About</Link></li>
                    </ul>
                </nav>
                <button className="admin-logout">
                    <FaSignOutAlt className="icon" /> Logout
                </button>
            </div>

            <div className="admin-main">
                <header className="admin-header">
                    <h2 className="admin-heading">NutrifyLife - Admin Panel</h2>
                    <button className="admin-logout-btn">
                        <FaSignOutAlt className="icon" /> Logout
                    </button>
                </header>

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;