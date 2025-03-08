import React, { useState } from "react";
import "./Diet.css";




const ageGroups = [
  { id: "children", label: "1-5 years 🧒", advice: "High-calorie foods for growth, calcium for bone development, and vitamin D." },
  { id: "adolescents", label: "6-18 years 👦", advice: "Emphasize protein for growth, iron for menstruating girls, and calcium for bone health." },
  { id: "youngAdults", label: "19-30 years 💪", advice: "Focus on protein, healthy fats, and maintaining an active metabolism." },
  { id: "middleAged", label: "31-50 years 🧑‍⚖", advice: "Focus on heart-healthy fats, fiber for digestion, and vitamins like B12 and D." },
  { id: "seniors", label: "51+ years 👵", advice: "Focus on easy-to-digest foods, high fiber, calcium, vitamin D, and antioxidants for joint and immune support." }
];

const genderAdvice = {
  female: "Women need additional iron, folate, and calcium to support hormonal health and bone density.",
  male: "Men may need higher protein, zinc for immune health, and magnesium for testosterone levels."
};

const Diet = () => {
  const [step, setStep] = useState(1);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [dietAdvice, setDietAdvice] = useState("");

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
    setStep(2);
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    setStep(3);
    const advice = `${ageGroups.find((group) => group.id === selectedAge).advice} ${genderAdvice[gender]}`;
    setDietAdvice(advice);
  };

  return (
    <div className="diet-container">
      <div className="background-overlay"></div>

      <div className="content-wrapper">
        
        <div className="intro-section">
          <h1>🍏 Your Personalized Dietary Guide</h1>
          <p>
            Discover the best nutritional choices tailored to your age and gender. 
            Answer a few quick questions and get customized diet recommendations.
          </p>
        </div>

        <div className="quiz-section">
          <div className="quiz-card">
            <h2>Interactive Dietary Quiz</h2>

            {step === 1 && (
              <div className="quiz-step">
                <h3>Step 1: Select Your Age Group</h3>
                <div className="options">
                  {ageGroups.map((age) => (
                    <button key={age.id} onClick={() => handleAgeSelection(age.id)} className="option">
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="quiz-step">
                <h3>Step 2: Select Your Gender</h3>
                <div className="options">
                  <button onClick={() => handleGenderSelection("female")} className="option">Female 👩</button>
                  <button onClick={() => handleGenderSelection("male")} className="option">Male 👨</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="quiz-step result">
                <h3>Your Personalized Dietary Advice:</h3>
                <p>{dietAdvice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  
  );
};



export default Diet;

