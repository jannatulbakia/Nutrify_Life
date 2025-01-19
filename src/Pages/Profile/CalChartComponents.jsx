import React from 'react';

const CalChartComponents = ({ food }) => {
    const{quantity,name,calories} =food;
    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Foods List</h2>
            <table
                border="1"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center",
                    marginTop: "20px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                }}
            >
                <tr>
                <th>Name </th>
                <th>Quantity</th>
                <th>Calories</th>
                </tr>

                <tr><td>{name}</td><td>{quantity}</td><td>{calories}</td></tr>
                
       
            </table>
        </div>
    );
};

export default CalChartComponents;
