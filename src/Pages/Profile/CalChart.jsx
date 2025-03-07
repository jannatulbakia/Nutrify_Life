import React, { useEffect, useState } from 'react';
import CalChartComponents from './CalChartComponents';
import "./CalChart.css";

const CalChart = () => {
    const [foods, setFoods] = useState([]); 
    const [error, setError] = useState(null); 
    const [searchQuery, setSearchQuery] = useState(''); 
    const [selectedFood, setSelectedFood] = useState(null); 
    const [quantity, setQuantity] = useState(1); 
    const [addedFoods, setAddedFoods] = useState([]); 
    const [totalCalories, setTotalCalories] = useState(0); 
    const [showDropdown, setShowDropdown] = useState(false); 

    useEffect(() => {

        const fetchFoods = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products/foods'); 
                if (!response.ok) {
                    throw new Error(`Failed to fetch foods, status code: ${response.status}`);
                }
                const data = await response.json();
                setFoods(data.myData);
               
            } catch (error) {
                
                console.error('Error type:', error.name);
                console.error('Error message:', error.message);
                console.error('Error stack trace:', error.stack); 
                setError(error.message); 
            }
        };

        fetchFoods();
    }, []); 

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFoodSelect = (food) => {
        setSelectedFood(food);
        setSearchQuery(food.name);
        setShowDropdown(false); 
    };

    const handleAddFood = () => {
        if (selectedFood) {
            
            const updatedFoods = [...addedFoods, { ...selectedFood, quantity }];
            setAddedFoods(updatedFoods);

           
            const newTotalCalories = updatedFoods.reduce(
                (acc, food) => acc + (food.calories * food.quantity), 
                0
            );
            setTotalCalories(newTotalCalories); 
            setQuantity(1); 
            setSelectedFood(null); 
        }
    };

   
    const handleUpdateTotalCalories = () => {
        const newTotalCalories = addedFoods.reduce(
            (acc, food) => acc + (food.calories * food.quantity), 
            0
        );
        setTotalCalories(newTotalCalories); 
    };

    return (
        <div className="calculator-container-profile">
            <h2>Calorie Calculator</h2>

         
            <input
                className="input-data"
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true); 
                }}
            />

           
            {showDropdown && searchQuery && (
                <div className="dropdown-list">
                    {filteredFoods.length === 0 ? (
                        <p>No foods found. Try a different search.</p>
                    ) : (
                        filteredFoods.map((food) => (
                            <div 
                                key={food._id} 
                                className="dropdown-item" 
                                onClick={() => handleFoodSelect(food)} 
                            >
                                <CalChartComponents food={food} />
                            </div>
                        ))
                    )}
                </div>
            )}

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

          
            {addedFoods.length > 0 && (
                <div className="added-foods">
                    <h3 >Foods Added</h3>
                    {addedFoods.map((food, index) => (
                        <div key={index} className="added-food-item">
                            <p>{food.quantity} {food.unit} of {food.name}</p>
                            <p>{food.calories * food.quantity} cal</p>
                        </div>
                    ))}
                   
                    <h3>Total Calories: {totalCalories} cal</h3>
                    
                    <button onClick={handleUpdateTotalCalories}>Update Total Calories</button>
                </div>
            )}
        </div>
    );
};

export default CalChart;
