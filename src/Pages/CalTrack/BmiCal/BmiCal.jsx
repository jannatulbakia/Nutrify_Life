import { useState } from "react";
import "./BmiCal.css"; 

const CalorieCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseInt(age);
    const activityFactor = parseFloat(activity);

    if (!weightKg || !heightCm || !ageYears) {
      alert("Please enter valid inputs.");
      return;
    }

    let BMR;
    if (gender === "male") {
      BMR = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else {
      BMR = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    }

    const dailyCalories = BMR * activityFactor;
    setCalories(dailyCalories.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2 className="bmi">Calorie Intake Calculator</h2>

      <label className="bmiLabel">Height (cm): </label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" /><br />

      <label className="bmiLabel">Weight (kg): </label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" /><br />

      <label className="bmiLabel">Age: </label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" /><br />

      <label className="bmiLabel">Gender: </label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select><br />

      <label className="bmiLabel">Activity Level: </label>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="1.2">Sedentary (Little or no exercise)</option>
        <option value="1.375">Lightly Active (1-3 days/week)</option>
        <option value="1.55">Moderately Active (3-5 days/week)</option>
        <option value="1.725">Very Active (6-7 days/week)</option>
        <option value="1.9">Super Active (Athlete/Heavy Work)</option>
      </select><br />

      <button className="calculate-btn" onClick={calculateCalories}>
        Calculate
      </button><br />

      {calories && <h3>Daily Calorie Intake: {calories} kcal</h3>}
    </div>
  );
};

export default CalorieCalculator;
