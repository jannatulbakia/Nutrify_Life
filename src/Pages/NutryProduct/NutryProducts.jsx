import React, { useEffect, useState } from 'react';
import NutryProductComponents from './NutryProductComponents';
import './NutryProduct.css'

const NutryProducts = () => {
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/products');
            if (!response.ok) {
              throw new Error(`Failed to fetch foods, status code: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data.myData);
            
          } catch (error) {
          
            console.error('Error type:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack trace:', error.stack); 
            setError(error.message); 
          }
        };
    
        fetchProducts();
      }, []); 
      
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