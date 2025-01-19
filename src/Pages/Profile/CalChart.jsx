import React, { useEffect, useState } from 'react';
import CalChartComponents from './CalChartComponents';

const CalChart = () => {
    const [foods, setFoods] = useState([]); // State to store the list of foods
    const [error, setError] = useState(null); // To store any errors

    useEffect(() => {
        // Fetch foods data from the backend
        const fetchFoods = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/products/foods'); // Backend URL
            if (!response.ok) {
              throw new Error(`Failed to fetch foods, status code: ${response.status}`);
            }
            const data = await response.json();
            setFoods(data.myData);
            console.log(data.myData); // Set the data (foods) in state
          } catch (error) {
            // Log the error type in the console
            console.error('Error type:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack trace:', error.stack); // Optional: view the stack trace
            setError(error.message); // Handle the error and set it to state
          }
        };
    
        fetchFoods();
      }, []); 
      // Run this effect once when the component mounts

  // Show an error if fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
        <div>
        <h2>Foods List</h2>
        {foods.length === 0 ? (
          <p>Loading...</p>
        ) : (
          foods.map((food) => (
            <CalChartComponents key={food._id} food={food} />
          ))
        )}
      </div>
    );
  };
  
  
export default CalChart;