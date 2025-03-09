import React, { useEffect, useState } from 'react';
import './AdminAddFood.css';

const AdminFoodAdd = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', problem: '', improve: '' });
    const [editProduct, setEditProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data.data); 
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCreate = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) throw new Error('Failed to create product');
            await fetchProducts(); 
            setNewProduct({ name: '', problem: '', improve: '' });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editProduct),
            });
            if (!response.ok) throw new Error('Failed to update product');
            await fetchProducts(); 
            setEditProduct(null); 
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete product');
            await fetchProducts();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='prod'>
            <h2>Manage Products</h2>
            {error && <p>Error: {error}</p>}
            <div>
                <h3>Create Product</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Problem"
                    value={newProduct.problem}
                    onChange={(e) => setNewProduct({ ...newProduct, problem: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Improve"
                    value={newProduct.improve}
                    onChange={(e) => setNewProduct({ ...newProduct, improve: e.target.value })}
                />
                <button onClick={handleCreate}>Create</button>
            </div>

            <div className='listt'>
                <h3>Product List</h3>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name} 
                            <button onClick={() => setEditProduct(product)}>Edit</button>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {editProduct && (
                <div className='edidel'>
                    <h3>Edit Product</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={editProduct.name}
                        onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Problem"
                        value={editProduct.problem}
                        onChange={(e) => setEditProduct({ ...editProduct, problem: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Improve"
                        value={editProduct.improve}
                        onChange={(e) => setEditProduct({ ...editProduct, improve: e.target.value })}
                    />
                    <button onClick={() => handleUpdate(editProduct._id)}>Update</button>
                    <button onClick={() => setEditProduct(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default AdminFoodAdd;