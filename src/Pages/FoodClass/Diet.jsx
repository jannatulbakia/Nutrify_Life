import React, { useState } from 'react';
import './Diet.css';
// Sample images for each age group (use actual URLs for your images)
const ageImages = {
  children: 'https://via.placeholder.com/150?text=Kids+Food+🥕',
  adolescents: 'https://via.placeholder.com/150?text=Teen+Food+🍏',
  youngAdults: 'https://via.placeholder.com/150?text=Young+Adult+🍗',
  middleAged: 'https://via.placeholder.com/150?text=Middle+Aged+🥑',
  seniors: 'https://via.placeholder.com/150?text=Seniors+🍲',
};

const Diet = () => {
  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [dietInfo, setDietInfo] = useState('');

  // Unified click handler for handling both age group and gender selection
  const onHandleClick = (type, value) => {
    if (type === 'ageGroup') {
      setAgeGroup(value);
      setStep(2); // Move to gender selection after selecting age group
    } else if (type === 'gender') {
      setGender(value);
      setStep(3); // Proceed to get dietary advice after selecting gender
    }
  };

  const getDietaryAdvice = () => {
    let info = '';

    if (ageGroup === 'children') {
      info += '🧒 Recommended for Children (1-5 years): High-calorie foods for growth, calcium for bone development, and vitamin D. 🥛';
    } else if (ageGroup === 'adolescents') {
      info += '👦 Recommended for Adolescents (6-18 years): Emphasize protein for growth, iron for menstruating girls, and calcium for bone health. 🍎';
    } else if (ageGroup === 'youngAdults') {
      info += '💪 Recommended for Young Adults (19-30 years): Focus on protein, healthy fats, and maintaining an active metabolism. 🥗';
    } else if (ageGroup === 'middleAged') {
      info += '🧑‍⚖️ Recommended for Middle-Aged Adults (31-50 years): Focus on heart-healthy fats, fiber for digestion, and vitamins like B12 and D. 🥑';
    } else if (ageGroup === 'seniors') {
      info += '👵 Recommended for Seniors (51+ years): Focus on easy-to-digest foods, high fiber, calcium, vitamin D, and antioxidants for joint and immune support. 🍲';
    }

    if (gender === 'female') {
      info += ' Women need additional iron, folate, and calcium to support hormonal health and bone density. 💪';
    } else if (gender === 'male') {
      info += ' Men may need higher protein, zinc for immune health, and magnesium for testosterone levels. 🥩';
    }

    setDietInfo(info);
    setStep(4); // Show the final result step
  };

  return (
    <div className="quiz-container">
      <h2>Interactive Dietary Guide Quiz</h2>
      
      {/* Step 1: Age Group Selection */}
      {step === 1 && (
        <div className="quiz-step">
          <h3>Step 1: Select Your Age Group</h3>
          <div className="options">
            <button onClick={() => onHandleClick('ageGroup', 'children')} className="option">
              <img src={ageImages.children} alt="Children" />
              <span>1-5 years 🧒</span>
            </button>
            <button onClick={() => onHandleClick('ageGroup', 'adolescents')} className="option">
              <img src={ageImages.adolescents} alt="Adolescents" />
              <span>6-18 years 👦</span>
            </button>
            <button onClick={() => onHandleClick('ageGroup', 'youngAdults')} className="option">
              <img src={ageImages.youngAdults} alt="Young Adults" />
              <span>19-30 years 💪</span>
            </button>
            <button onClick={() => onHandleClick('ageGroup', 'middleAged')} className="option">
              <img src={ageImages.middleAged} alt="Middle Aged" />
              <span>31-50 years 🧑‍⚖️</span>
            </button>
            <button onClick={() => onHandleClick('ageGroup', 'seniors')} className="option">
              <img src={ageImages.seniors} alt="Seniors" />
              <span>51+ years 👵</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Gender Selection */}
      {step === 2 && (
        <div className="quiz-step">
          <h3>Step 2: Select Your Gender</h3>
          <div className="options">
            <button onClick={() => onHandleClick('gender', 'female')} className="option">
              <span>Female 👩</span>
            </button>
            <button onClick={() => onHandleClick('gender', 'male')} className="option">
              <span>Male 👨</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Display Dietary Advice */}
      {step === 3 && (
        <div className="quiz-step">
          <button onClick={getDietaryAdvice} className="btn-submit">
            Get My Dietary Advice 🥗
          </button>
        </div>
      )}

      {/* Step 4: Final Result */}
      {step === 4 && (
        <div className="quiz-step">
          <h3>Your Personalized Dietary Advice:</h3>
          <p>{dietInfo}</p>
        </div>
      )}
    </div>
  );
};

export default Diet;
