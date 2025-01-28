import React from 'react';

const CalChartComponents = ({ food }) => {
    const { quantity, name, calories } = food;
    return (
        <div>
            <table
                border="1"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                    backgroundColor: "#000000",  // Black background
                    color: "#ffffff",  // White text
                }}
            >
                <tbody>
                    <tr>
                        <th style={{ border: "1px solid white", padding: "10px", height: "50px" }}>Name</th>
                        <td style={{ border: "1px solid white", padding: "10px", height: "50px" }}>{name}</td>
                        <th style={{ border: "1px solid white", padding: "10px", height: "50px" }}>Quantity</th>
                        <td style={{ border: "1px solid white", padding: "10px", height: "50px" }}>{quantity}</td>
                        <th style={{ border: "1px solid white", padding: "10px", height: "50px" }}>Calories</th>
                        <td style={{ border: "1px solid white", padding: "10px", height: "50px" }}>{calories}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CalChartComponents;
