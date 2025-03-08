import BmiCal from "./BmiCal/BmiCal"; 
import './CalTrack.css';  

const CalTrack = () => {
  return (
    <div className="backgroundImage">
         <div className="caltrack-container">
      <div className="intro">
        <h1>Welcome to the Calorie Tracker</h1>
        <p>
          Maintaining a healthy lifestyle starts with understanding your daily calorie intake. Our <strong>Calorie Tracker</strong> provides an essential tools to help you stay on top of your nutrition:
        </p>
        <ul>
          <li><strong>Calorie Intake Calculator:</strong> Calculate your daily calorie needs based on weight, height, age, and activity level.</li>
        </ul>
        <p>Start tracking your calories today and take a step towards a healthier you! 🚀</p>
      </div>
      <p>Calories Count</p>
      <BmiCal />
    
    </div>
    </div>
    
  );
};

export default CalTrack;
