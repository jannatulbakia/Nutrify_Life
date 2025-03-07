import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import './UserDetails.css';  

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '' });

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(7);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/users');
            if (Array.isArray(response.data)) {
                setUsers(response.data);
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleView = (user) => {
        setSelectedUser(user);
        setViewModalOpen(true);
    };

    const handleEdit = (user) => {
        setUserData(user);
        setEditModalOpen(true);
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            await axios.delete(`http://localhost:5000/api/auth/user/${id}`);
            fetchUsers();
            Swal.fire('Deleted!', 'User has been deleted.', 'success');
        }
    };

    const handleUpdate = async () => {
        await axios.put(`http://localhost:5000/api/auth/user/${userData._id}`, userData);
        fetchUsers();
        setEditModalOpen(false);
        Swal.fire('Updated!', 'User has been updated.', 'success');
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="containers">
            <h2 className="title">User Details</h2>
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr className="table-header">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length > 0 ? (
                            currentUsers.map(user => (
                                <tr key={user._id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className="actions">
                                        <FaEye onClick={() => handleView(user)} className="view-icon" />
                                        <FaEdit onClick={() => handleEdit(user)} className="edit-icon" />
                                        <FaTrash onClick={() => handleDelete(user._id)} className="delete-icon" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="no-users">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-button prev"
                >
                    Prev
                </button>
                {[...Array(Math.ceil(users.length / usersPerPage))].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`pagination-button page ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                    className="pagination-button next"
                >
                    Next
                </button>
            </div>
            {viewModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">User Details</h2>
                        {selectedUser && (
                            <div>
                                <p><strong>First Name:</strong> {selectedUser.firstName}</p>
                                <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
                                <p><strong>Email:</strong> {selectedUser.email}</p>
                            </div>
                        )}
                        <button onClick={() => setViewModalOpen(false)} className="modal-button">Close</button>
                    </div>
                </div>
            )}

            {editModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">Edit User</h2>
                        <label className="input-label">
                            First Name:
                            <input
                                type="text"
                                value={userData.firstName}
                                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                className="input-field"
                            />
                        </label>
                        <label className="input-label">
                            Last Name:
                            <input
                                type="text"
                                value={userData.lastName}
                                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                className="input-field"
                            />
                        </label>
                        <label className="input-label">
                            Email:
                            <input
                                type="email"
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                className="input-field"
                            />
                        </label>
                        <div className="modal-actions">
                            <button onClick={handleUpdate} className="modal-button update">Update</button>
                            <button onClick={() => setEditModalOpen(false)} className="modal-button cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
