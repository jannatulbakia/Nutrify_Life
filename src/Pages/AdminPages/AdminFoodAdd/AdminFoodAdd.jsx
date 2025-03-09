import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './AdminAddFood.css';

const AdminFoodAdd = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            if (!response.data) throw new Error('Failed to fetch products');
            setProducts(response.data.data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCreate = async (newProduct) => {
        try {
            const response = await axios.post('http://localhost:5000/api/products', newProduct);
            if (!response.data) throw new Error('Failed to create product');
            await fetchProducts();
            Swal.fire('Created!', 'Product has been created.', 'success');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUpdate = async (id, updatedProduct) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/products/${id}`, updatedProduct);
            if (!response.data) throw new Error('Failed to update product');
            await fetchProducts();
            Swal.fire('Updated!', 'Product has been updated.', 'success');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/products/${id}`);
                if (!response.data) throw new Error('Failed to delete product');
                await fetchProducts();
                Swal.fire('Deleted!', 'Product has been deleted.', 'success');
            } catch (error) {
                setError(error.message);
            }
        }
    };

    const handleView = (product) => {
        Swal.fire({
            title: 'Product Details',
            html: `
                <strong>Name:</strong> ${product.name}<br>
                <strong>Problem:</strong> ${product.problem}<br>
                <strong>Improve:</strong> ${product.improve}
            `,
            icon: 'info',
            confirmButtonText: 'Close'
        });
    };

    const handleEdit = (product) => {
        Swal.fire({
            title: 'Update Product',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Name" value="${product.name}">
                <input id="swal-input2" class="swal2-input" placeholder="Problem" value="${product.problem}">
                <input id="swal-input3" class="swal2-input" placeholder="Improve" value="${product.improve}">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const name = document.getElementById('swal-input1').value;
                const problem = document.getElementById('swal-input2').value;
                const improve = document.getElementById('swal-input3').value;

                if (!name || !problem || !improve) {
                    Swal.showValidationMessage('All fields are required');
                }

                return { name, problem, improve };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                handleUpdate(product._id, result.value);
            }
        });
    };

    const openCreateProductModal = () => {
        Swal.fire({
            title: 'Create New Product',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Name">
                <input id="swal-input2" class="swal2-input" placeholder="Problem">
                <input id="swal-input3" class="swal2-input" placeholder="Improve">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const name = document.getElementById('swal-input1').value;
                const problem = document.getElementById('swal-input2').value;
                const improve = document.getElementById('swal-input3').value;

                if (!name || !problem || !improve) {
                    Swal.showValidationMessage('All fields are required');
                }

                return { name, problem, improve };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                handleCreate(result.value);
            }
        });
    };

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className='prod'>
            <h2>Manage Transform Food</h2>
            {error && <p>Error: {error}</p>}
            <div>
                <h3>Create Foods to Transform</h3>
                <button onClick={openCreateProductModal}>
                    <span role="img" aria-label="plus">➕</span> Add Food
                </button>
            </div>

            <div className='listt'>
                <h3>Product List</h3>
                <ul className='product-list'>
                    {currentProducts.map((product) => (
                        <li key={product._id} className='product-item'>
                            <div className='product-box'>
                                <span className='product-name'>{product.name}</span>
                                <div className='icons'>
                                    <span className='icon' onClick={() => handleView(product)}>👁️</span>
                                    <span className='icon' onClick={() => handleEdit(product)}>✏️</span>
                                    <span className='icon' onClick={() => handleDelete(product._id)}>🗑️</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='pagination'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={index + 1 === currentPage ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminFoodAdd;