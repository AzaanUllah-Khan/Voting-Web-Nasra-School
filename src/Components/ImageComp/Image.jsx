import React, { useState } from 'react';
import './Image.css';

const ImageComp = ({ img, name }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className={`imgComp ${selected ? 'selected' : ''}`} onClick={handleClick}>
      <img src={img} className='imgCompImage' alt={name} />
      <h3 className='candidateName'>{name}</h3>
    </div>
  );
};

export default ImageComp;
