import React, { useState } from 'react';
import './BmiCal.css';

const BmiCal = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1');
  const [totalCalories, setTotalCalories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setTotalCalories('');

    setTimeout(() => {
      if (age === '' || weight === '' || height === '' || age < 15 || age > 80) {
        setError('Please make sure the values you entered are correct');
        setLoading(false);
        return;
      }

      let calculatedCalories;
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const ageNum = parseFloat(age);

      if (gender === 'male') {
        if (activity === '1') {
          calculatedCalories = 1.2 * (66.5 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum);
        } else if (activity === '2') {
          calculatedCalories = 1.375 * (66.5 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum);
        } else if (activity === '3') {
          calculatedCalories = 1.55 * (66.5 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum);
        } else if (activity === '4') {
          calculatedCalories = 1.725 * (66.5 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum);
        } else {
          calculatedCalories = 1.9 * (66.5 + 13.75 * weightNum + 5.003 * heightNum - 6.755 * ageNum);
        }
      } else {
        if (activity === '1') {
          calculatedCalories = 1.2 * (655 + 9.563 * weightNum + 1.850 * heightNum - 4.676 * ageNum);
        } else if (activity === '2') {
          calculatedCalories = 1.375 * (655 + 9.563 * weightNum + 1.850 * heightNum - 4.676 * ageNum);
        } else if (activity === '3') {
          calculatedCalories = 1.55 * (655 + 9.563 * weightNum + 1.850 * heightNum - 4.676 * ageNum);
        } else if (activity === '4') {
          calculatedCalories = 1.725 * (655 + 9.563 * weightNum + 1.850 * heightNum - 4.676 * ageNum);
        } else {
          calculatedCalories = 1.9 * (655 + 9.563 * weightNum + 1.850 * heightNum - 4.676 * ageNum);
        }
      }

      setTotalCalories(calculatedCalories);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading display-5 pb-3">BMI & Calorie Calculator</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Ages 15-80"
            />
          </div>

          <fieldset className="form-group">
            <legend>Gender</legend>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="male"
                name="gender"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="female"
                name="gender"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              <label htmlFor="female">Female</label>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="In kilograms"
            />
          </div>

          <div className="form-group">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="In centimeters"
            />
          </div>

          <div className="form-group">
            <label htmlFor="activity">Activity Level</label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="1">Sedentary (little or no exercise)</option>
              <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
              <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Calculate Calories"
            />
          </div>

        </form>

        {loading && <div id="loading">Loading...</div>}
        {error && <div className="alert-danger">{error}</div>}
        {totalCalories && (
          <div id="results">
            <h5>Total Calories</h5>
            <input
              type="number"
              value={totalCalories}
              disabled
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCal;
