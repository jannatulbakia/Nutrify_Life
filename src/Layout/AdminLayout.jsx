import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
                <nav>
                    <ul>
                        <li className="mb-2">
                            <Link to="/admin/adminhome" className="block p-2 hover:bg-gray-700 rounded">Admin Home</Link>
                        </li>
                        {/* Add more admin routes here */}
                        <li className="mb-2">
                            <Link to="/admin/userdetails" className="block p-2 hover:bg-gray-700 rounded">User Details</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/admin/adminabout" className="block p-2 hover:bg-gray-700 rounded">Admin About</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="bg-black">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;