import React from 'react';
import './SickFood.css';

const foods = [
  {
    title: "Cold & Flu",
    items: [
      "Warm Soups: Hydration and congestion relief.",
      "Herbal Teas: Boost immunity.",
      "Citrus Fruits: High in vitamin C.",
      "Honey: Soothes coughs.",
      "Garlic: Antiviral and antibacterial properties."
    ]
  },
  {
    title: "Diabetes",
    items: [
      "Leafy Greens: Low carbs, nutrient-rich.",
      "Whole Grains: Prevent sugar spikes.",
      "Legumes: Fiber and protein.",
      "Nuts: Healthy fats.",
      "Cinnamon: Improves insulin sensitivity."
    ]
  },
  {
    title: "Hypertension",
    items: [
      "Bananas: Rich in potassium.",
      "Beetroot: Improves circulation.",
      "Oats: Reduces bad cholesterol.",
      "Avocado: Heart-healthy fats.",
      "Low-Fat Dairy: Supports blood pressure control."
    ]
  },
  {
    title: "Acid Reflux",
    items: [
      "Ginger: Relieves stomach discomfort.",
      "Oatmeal: Absorbs stomach acid.",
      "Melons: Reduce reflux symptoms.",
      "Fennel: Soothes digestive tract.",
      "Lean Proteins: Less likely to trigger reflux."
    ]
  },
  {
    title: "Anemia",
    items: [
      "Red Meat: Rich in easily absorbed iron.",
      "Spinach and Kale: High in iron and vitamin C.",
      "Eggs: Nutrient-rich protein source.",
      "Beans: Plant-based iron source.",
      "Fortified Cereals: Boost iron intake."
    ]
  },
  {
    title: "Constipation",
    items: [
      "Prunes: Natural laxative.",
      "Chia Seeds: Aid bowel movements.",
      "Apples: Contain digestion-friendly pectin.",
      "Yogurt: Promotes healthy gut bacteria.",
      "Sweet Potatoes: Rich in fiber."
    ]
  },
  {
    title: "Osteoporosis",
    items: [
      "Dairy: High in calcium and vitamin D.",
      "Fatty Fish: Supports bone health.",
      "Almonds: Contain calcium and magnesium.",
      "Tofu: Plant-based calcium source.",
      "Broccoli and Kale: Bone-strengthening nutrients."
    ]
  },
  {
    title: "Depression or Stress",
    items: [
      "Dark Chocolate: Boosts serotonin.",
      "Blueberries: Combat stress-related radicals.",
      "Fatty Fish: Supports brain health.",
      "Nuts and Seeds: Aid neurotransmitter function.",
      "Fermented Foods: Improve gut health."
    ]
  }
];

const FoodCard = ({ title, items }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function SickFood() {
  return (
    <div className="App">
      <h1>Sickness-Based Food Suggestions</h1>
      <div className="card-container">
        {foods.map((food, index) => (
          <FoodCard key={index} title={food.title} items={food.items} />
        ))}
      </div>
    </div>
  );
}

export default SickFood