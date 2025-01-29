import React from 'react';

const NutryProductComponents = ({ product }) => {
  const { name, problem, improve } = product;
  return (
    <div className="product-card">
      <p className='text-lg font-semibold'>{name}</p>
      <p><span className='font-semibold text-black underline'>Problem:</span> {problem}</p>
      <p><span className='font-semibold text-black underline'>Improvement:</span> {improve}</p>
    </div>
  );
};

export default NutryProductComponents;

