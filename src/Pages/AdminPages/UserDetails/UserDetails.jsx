import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '' });

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

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className="flex space-x-2">
                                        <FaEye onClick={() => handleView(user)} className="text-blue-600 cursor-pointer" />
                                        <FaEdit onClick={() => handleEdit(user)} className="text-green-600 cursor-pointer" />
                                        <FaTrash onClick={() => handleDelete(user._id)} className="text-red-600 cursor-pointer" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* View Modal */}
            {viewModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">User Details</h2>
                        {selectedUser && (
                            <div>
                                <p><strong>First Name:</strong> {selectedUser.firstName}</p>
                                <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
                                <p><strong>Email:</strong> {selectedUser.email}</p>
                            </div>
                        )}
                        <button onClick={() => setViewModalOpen(false)} className="btn mt-4">Close</button>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {editModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Edit User</h2>
                        <label className="block mb-2">
                            First Name:
                            <input
                                type="text"
                                value={userData.firstName}
                                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                className="input input-bordered w-full mb-4"
                            />
                        </label>
                        <label className="block mb-2">
                            Last Name:
                            <input
                                type="text"
                                value={userData.lastName}
                                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                className="input input-bordered w-full mb-4"
                            />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input
                                type="email"
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                className="input input-bordered w-full mb-4"
                            />
                        </label>
                        <div className="flex justify-end space-x-2">
                            <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                            <button onClick={() => setEditModalOpen(false)} className="btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
