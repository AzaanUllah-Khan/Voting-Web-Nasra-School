import React from 'react';
import './Image.css';

const ImageComp = ({ img, name, symbol, isSelected, onClick }) => {
  return (
    <div className={`imgComp ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <img src={img} className='imgCompImage' alt={name} />
      <h3 className='candidateName'>{name}</h3>
      <p className='symbolName'>{symbol}</p>
    </div>
  );
};

export default ImageComp;
