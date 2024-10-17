import React, { useState, useEffect } from 'react';
import './Color.css';

const Color = () => {
  const [color, setColor] = useState('black');

  
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, );

  const bgcolor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
    <div className="container">
      <button className="colors" id="color-1" onClick={() => bgcolor('#EB9DA2')}></button>
      <button className="colors" id="color-2" onClick={() => bgcolor('#F0B884')}></button>
      <button className="colors" id="color-3" onClick={() => bgcolor('#E8E6A5')}></button>
      <button className="colors" id="color-4" onClick={() => bgcolor('#BBE8B5')}></button>
      <button className="colors" id="color-5" onClick={() => bgcolor('#ACBBE8')}></button>
      <button className="colors" id="color-6" onClick={() => bgcolor('#C5ACE8')}></button>
    </div>
    </>
  );
};

export default Color;
