import React from 'react';

import { useState } from "react";
import './SuggesstionDoc.css';


const dietDetails = {
  diabetes: {
    title: "Diabetes Diet Plan",
  },
  pregnancy: {
    title: "Pregnancy Diet Plan",
  },
  vegetarian: {
    title: "Vegetarian Diet",
  },
  "non-vegetarian": {
    title: "Non-vegetarian Diet",
  },
};

const dietPlan = {
  "Morning (8:00 - 8:30 AM)": [
    "3 small wheat chapatis (90g)",
    "1 boiled egg",
    "Unlimited leafy vegetables (spinach, red spinach, pumpkin leaves, etc.)",
    "Fruits (black plum, lemon, guava, etc.)",
  ],
  "Mid-Morning (11:00 AM)": [
    "30g biscuits or puffed rice",
    "1 small mango (half) or 1 big ripe guava or 3 small custard apples",
  ],
  "Lunch (2:00 - 2:30 PM)": [
    "3 cups cooked rice (360g)",
    "2 pieces of fish or meat (60g)",
    "Half cup lentils (250g with thick consistency)",
    "Unlimited leafy and non-leafy vegetables",
  ],
  "Evening (5:00 - 6:00 PM)": [
    "1 cup milk (120ml) or roasted chickpeas/peanuts (30g)",
  ],
  "Dinner (8:00 - 8:30 PM)": [
    "3 small wheat chapatis (90g)",
    "1 piece fish or meat (30g)",
    "Half cup lentils (250g with thick consistency)",
    "Unlimited leafy and non-leafy vegetables",
  ],
  "Night (11:00 PM)": ["1 cup milk or 1 small biscuit packet"],
};

const SuggestionDoc = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="con">
      <div className="doctor-info">
        <h1>Suggestion From Doctor 👩‍⚕️</h1>
        <p className="doctor-name">Dr. Subrina Alam Pushpa</p>
        <p className="doctor-designation">
          MBBBS(C.U) <br />
          MCGP(SKIN & VD) <br />
          DOC(SKIN & VD) <br />
          PGT (CUMILLA MEDICAL COLLEGE)
        </p>
      </div>

      <label htmlFor="dietSelect" className="label">
        Select Diet Category:
      </label>
      <select
        id="dietSelect"
        value={selectedOption}
        onChange={handleSelectChange}
        className="select-box"
      >
        <option value="">-- Choose an Option --</option>
        <option value="diabetes">Diabetes</option>
        <option value="pregnancy">Pregnancy</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-vegetarian</option>
      </select>

      {selectedOption && (
        <div className="details-box">
          <h2 className="details-title">{dietDetails[selectedOption].title}</h2>
          <p className="details-description">
            {dietDetails[selectedOption].description}
          </p>
        </div>
      )}

      {selectedOption === "diabetes" && (
        <div>
          <div className="cardss">
            {Object.keys(dietPlan).map((time) => (
              <div key={time}>
                <h2>{time}</h2>
                <ul>
                  {dietPlan[time].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedOption === "pregnancy" && (
        <div className="cardss">
          <h2>1st Trimester (Weeks 1-12)</h2>
          <ul>
            <li><strong>Fruits:</strong> Apples, Bananas, Oranges, Berries</li>
            <li><strong>Vegetables:</strong> Spinach, Carrots, Broccoli, Kale</li>
            <li><strong>Protein:</strong> Lean meats, Eggs, Tofu, Lentils</li>
            <li><strong>Whole Grains:</strong> Brown rice, Whole wheat bread, Oats</li>
            <li><strong>Healthy Fats:</strong> Avocados, Olive oil, Nuts</li>
            <li><strong>Fluids:</strong> Water, Coconut water, Fresh fruit juices</li>
          </ul>

          <h2>2nd Trimester (Weeks 13-26)</h2>
          <ul>
            <li><strong>Fruits:</strong> Mango, Papaya, Pomegranate, Watermelon</li>
            <li><strong>Vegetables:</strong> Sweet potatoes, Cucumber, Asparagus, Peas</li>
            <li><strong>Protein:</strong> Chicken, Fish (low mercury), Beans, Cottage cheese</li>
            <li><strong>Whole Grains:</strong> Quinoa, Barley, Whole-wheat pasta</li>
            <li><strong>Healthy Fats:</strong> Chia seeds, Walnuts, Almonds</li>
            <li><strong>Fluids:</strong> Herbal teas, Water, Fresh vegetable juices</li>
          </ul>

          <h2>3rd Trimester (Weeks 27-40)</h2>
          <ul>
            <li><strong>Fruits:</strong> Apples, Grapes, Kiwi, Pears</li>
            <li><strong>Vegetables:</strong> Bell peppers, Zucchini, Leafy greens</li>
            <li><strong>Protein:</strong> Lean beef, Salmon, Eggs, Greek yogurt</li>
            <li><strong>Whole Grains:</strong> Oats, Millet, Brown rice</li>
            <li><strong>Healthy Fats:</strong> Almond butter, Flax seeds, Pumpkin seeds</li>
            <li><strong>Fluids:</strong> Water, Coconut water, Low-fat milk</li>
          </ul>
        </div>
      )}

      {selectedOption === "vegetarian" && (
        <div className="cardss">
          <h2>🍽️ Meal Time</h2>
          <ul>
            <li><strong>Breakfast:(10:00 AM)</strong> </li>
            <li><strong>Lunch:(2:00 PM)</strong></li>
            <li><strong>Snack:(6:00 PM)</strong></li>
            <li><strong>Dinner:(10:00 PM)</strong></li>
          </ul>
          <h2>✅ Daily Nutritional Focus</h2>
          <ul>
            <li><strong>Protein:</strong> Aim for 50-70g/day (based on activity level).</li>
            <ul>
              <li>Sources: Lentils, chickpeas, paneer, quinoa, Greek yogurt, nuts, and seeds.</li>
            </ul>

            <li><strong>Healthy Fats:</strong> 20-30% of daily intake.</li>
            <ul>
              <li>Sources: Avocados, olive oil, almonds, walnuts, chia seeds.</li>
            </ul>

            <li><strong>Complex Carbohydrates:</strong> 45-55% of daily intake.</li>
            <ul>
              <li>Sources: Whole grains (brown rice, quinoa, oats), sweet potatoes, legumes.</li>
            </ul>

            <li><strong>Vitamins & Minerals:</strong></li>
            <ul>
              <li><strong>Vitamin B12:</strong> Include fortified cereals or supplements.</li>
              <li><strong>Iron:</strong> Spinach, beans, and legumes (combine with Vitamin C for better absorption).</li>
              <li><strong>Omega-3s:</strong> Chia seeds, flaxseeds, or algae oil supplements.</li>
            </ul>
          </ul>

          <h2>Recommendations</h2>
          <ul>
            <li>Consider a Vitamin B12 supplement to prevent deficiency.</li>
            <li>Monitor iron levels, especially for menstruating individuals.</li>
            <li>Consult a dietitian for meal planning if managing PCOS or diabetes.</li>
          </ul>
        </div>
      )}

      {selectedOption === "non-vegetarian" && (
        <div className="cardss">
          <h1>Non-Vegetarian Diet – Balanced & Lean Protein Approach</h1>

          <section>
            <h2>🍽 Meal Time</h2>
            <ul>
              <li><strong>Breakfast:(10:00 AM)</strong> </li>
              <li><strong>Lunch:(2:00 PM)</strong></li>
              <li><strong>Snack:(6:00 PM)</strong></li>
              <li><strong>Dinner:(10:00 PM)</strong></li>
            </ul>
          </section>

          <section>
            <h2>✅ Daily Nutritional Focus</h2>
            <ul>
              <li><strong>Lean Protein:</strong> 60-80g/day.</li>
              <p>Sources: Skinless chicken, turkey, eggs, fish (salmon, sardines), lean beef.</p>
              <li><strong>Healthy Fats:</strong> 25-30% of daily intake.</li>
              <p>Sources: Fish oil (rich in Omega-3), avocado, nuts, olive oil.</p>
              <li><strong>Complex Carbohydrates:</strong> 40-50% of daily intake.</li>
              <p>Sources: Sweet potatoes, legumes, whole grains.</p>
              <li><strong>Fiber:</strong> Aim for 25-35g/day for digestive health.</li>
            </ul>
          </section>

          <section>
            <h2>Recommendations</h2>
            <ul>
              <li>Limit red meat (no more than 1-2 servings per week) to reduce heart disease risk.</li>
              <li>Prioritize grilled or baked methods over frying to reduce saturated fat.</li>
              <li>Consult a cardiologist if you have a family history of heart disease or high cholesterol.</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default SuggestionDoc;
