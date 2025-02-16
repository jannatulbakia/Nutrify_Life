import React, { useEffect, useState } from 'react';
import CalChartComponents from './CalChartComponents';
import "./CalChart.css";

const CalChart = () => {
    const [foods, setFoods] = useState([]); // State to store the list of foods
    const [error, setError] = useState(null); // To store any errors
    const [searchQuery, setSearchQuery] = useState(''); // State to store search query
    const [selectedFood, setSelectedFood] = useState(null); // State to store the selected food
    const [quantity, setQuantity] = useState(1); // State to store the quantity entered by the user
    const [addedFoods, setAddedFoods] = useState([]); // State to store the foods added to the calculator
    const [totalCalories, setTotalCalories] = useState(0); // State to store the total calories
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

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

    // Filter the foods based on the search query
    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFoodSelect = (food) => {
        setSelectedFood(food); // Set the clicked food as the selected food
        setSearchQuery(food.name); // Optionally, set the search query to the selected food's name
        setShowDropdown(false); // Hide the dropdown after selection
    };

    const handleAddFood = () => {
        if (selectedFood) {
            // Add the selected food to the addedFoods array along with the quantity
            const updatedFoods = [...addedFoods, { ...selectedFood, quantity }];
            setAddedFoods(updatedFoods);

            // Recalculate the total calories for the added foods
            const newTotalCalories = updatedFoods.reduce(
                (acc, food) => acc + (food.calories * food.quantity), 
                0
            );
            setTotalCalories(newTotalCalories); // Update the total calories state
            setQuantity(1); // Reset quantity input
            setSelectedFood(null); // Reset selected food after adding
        }
    };

    // Function to update the total calories for all added foods
    const handleUpdateTotalCalories = () => {
        const newTotalCalories = addedFoods.reduce(
            (acc, food) => acc + (food.calories * food.quantity), 
            0
        );
        setTotalCalories(newTotalCalories); // Update the total calories state
    };

    return (
        <div className="calculator-container-profile">
            <h2>Calorie Calculator</h2>

            {/* Search Input */}
            <input
                className="input-data"
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true); // Show dropdown when typing
                }}
            />

            {/* Dropdown for filtered foods */}
            {showDropdown && searchQuery && (
                <div className="dropdown-list">
                    {filteredFoods.length === 0 ? (
                        <p>No foods found. Try a different search.</p>
                    ) : (
                        filteredFoods.map((food) => (
                            <div 
                                key={food._id} 
                                className="dropdown-item" 
                                onClick={() => handleFoodSelect(food)} // Set the clicked food as the selected food
                            >
                                <CalChartComponents food={food} />
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Food selection and quantity */}
            {selectedFood && (
                <div className="food-selection-profile">
                    <h3>Selected Food: {selectedFood.name}</h3>
                    <p>{selectedFood.quantity} {selectedFood.unit}</p>
                    <p>{selectedFood.calories} cal per {selectedFood.unit}</p>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                    />
                    <button onClick={handleAddFood}>Add to List</button>
                </div>
            )}

            {/* List of added foods and total calories */}
            {addedFoods.length > 0 && (
                <div className="added-foods">
                    <h3 >Foods Added</h3>
                    {addedFoods.map((food, index) => (
                        <div key={index} className="added-food-item">
                            <p>{food.quantity} {food.unit} of {food.name}</p>
                            <p>{food.calories * food.quantity} cal</p>
                        </div>
                    ))}
                    {/* Display total calories */}
                    <h3>Total Calories: {totalCalories} cal</h3>
                    {/* Button to update the total calories */}
                    <button onClick={handleUpdateTotalCalories}>Update Total Calories</button>
                </div>
            )}
        </div>
    );
};

export default CalChart;
