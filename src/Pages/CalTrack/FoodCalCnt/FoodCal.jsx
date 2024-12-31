import React, { useState, useEffect } from 'react';
import './Foodcal.css';

function FoodCal() {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    setFoodList(storedFoodItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('foodItems', JSON.stringify(foodList));
  }, [foodList]);

  const totalCalories = foodList.reduce((sum, item) => sum + item.calories, 0);

  const handleAddFood = (event) => {
    event.preventDefault();
    if (!foodItem || isNaN(calories)) {
      alert('Please enter valid food item and calorie amount.');
      return;
    }

    const newFood = { food: foodItem, calories: parseInt(calories, 10) };
    setFoodList([...foodList, newFood]);
    setFoodItem('');
    setCalories('');
  };

  const handleRemoveFood = (index) => {
    const updatedList = foodList.filter((_, i) => i !== index);
    setFoodList(updatedList);
  };

  return (
    <div className="container">
      <h1>Food Calorie Calculator</h1>
      <form onSubmit={handleAddFood}>
        <div className="form-group">
          <label htmlFor="food">Food Item</label>
          <input
            type="text"
            id="food"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Food</button>
      </form>
      <div className="result">
        <ul id="food-list">
          {foodList.map((item, index) => (
            <li key={index}>
              {item.food}: {item.calories} calories{' '}
              <button onClick={() => handleRemoveFood(index)}>x</button>
            </li>
          ))}
        </ul>
        <h3>Total Calories: <span id="total-calories">{totalCalories}</span></h3>
      </div>
    </div>
  );
}

export default FoodCal;
