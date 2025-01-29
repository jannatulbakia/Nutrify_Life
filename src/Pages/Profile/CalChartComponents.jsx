import React from 'react';
import "./CalChart.css";

const CalChartComponents = ({ food }) => {
    const { quantity, name, calories, unit } = food;
    return (
        <div className="Food-Calorie">
            <p><span>{name}</span></p>
            <p><span>{quantity} {unit}</span></p>
            <p><span>{calories} cal</span></p>
        </div>
    );
};

export default CalChartComponents;
