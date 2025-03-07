import React, { useEffect, useState } from 'react';
import NutryProductComponents from './NutryProductComponents';
import './NutryProduct.css'

const NutryProducts = () => {
    const [products, setProducts] = useState([]); // State to store the list of foods
    const [error, setError] = useState(null); // To store any errors

    useEffect(() => {
        // Fetch foods data from the backend
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/products'); // Backend URL
            if (!response.ok) {
              throw new Error(`Failed to fetch foods, status code: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data.myData);
            // console.log(data.myData); // Set the data (foods) in state
          } catch (error) {
            // Log the error type in the console
            console.error('Error type:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack trace:', error.stack); // Optional: view the stack trace
            setError(error.message); // Handle the error and set it to state
          }
        };
    
        fetchProducts();
      }, []); 
      // Run this effect once when the component mounts

  // Show an error if fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
        <div className='products'>
        <h2>"Upgrade Your Cravings Without Compromise"</h2>
        <div>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <NutryProductComponents key={product._id} product={product} />
          ))
        )}
        </div>
      </div>
    );
  };
  
  
export default NutryProducts;