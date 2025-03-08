import React, { useEffect, useState } from 'react';
import './AdminHome.css';

const AdminHome = () => {
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        // Fetch total users from API
        const fetchTotalUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/users');
                const users = await response.json();

                setTotalUsers(users.length);
            } catch (error) {
                console.error('Error fetching total users:', error);
            }
        };

        fetchTotalUsers();
    }, []);

    return (
        <div className="admin-home-container">
            <main>
                <section className="dashboard-summary">
                    <h2>Dashboard Overview</h2>
                    <div className="stats">
                        <div className="card widget">
                            <h3>Total Users</h3>
                            <p>{totalUsers}</p>
                        </div>
                        <div className="card widget">
                            <h3>Manage Users</h3>
                            <a href="userdetails" className="button">Go to Users</a>
                        </div>
                        <div className="card widget">
                            <h3>Add Food</h3>
                            <a href="adminfood" className="button">Learn More</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminHome;
