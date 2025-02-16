import { useState } from "react";

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
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Calorie Intake Calculator</h2>
      <label className="bmiLabel">Height (cm): </label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" /><br /><br />

      <label className="bmiLabel">Weight (kg): </label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" /><br /><br />

      <label className="bmiLabel">Age: </label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" /><br /><br />

      <label className="bmiLabel">Gender: </label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select><br /><br />

      <label className="bmiLabel">Activity Level: </label>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="1.2">Sedentary (Little or no exercise)</option>
        <option value="1.375">Lightly Active (1-3 days/week)</option>
        <option value="1.55">Moderately Active (3-5 days/week)</option>
        <option value="1.725">Very Active (6-7 days/week)</option>
        <option value="1.9">Super Active (Athlete/Heavy Work)</option>
      </select><br /><br />

      <button onClick={calculateCalories} style={{ padding: "10px 20px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Calculate
      </button><br /><br />

      {calories && <h3>Daily Calorie Intake: {calories} kcal</h3>}
    </div>
  );
};

export default CalorieCalculator;
