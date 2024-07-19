import React from 'react';
import './Image.css';
import { Skeleton } from 'antd';

const ImageComp = ({ img, name, symbol, isSelected, onClick, isLoading }) => {
  return (
    <div className={`imgComp ${isSelected ? 'selected' : ''}`} onClick={onClick} style={{ width: '250px' }}>
      {isLoading ? (
        <Skeleton.Image className='imgCompImage' style={{ width: '230px', height: '200px', marginBottom:"5px" }} />
      ) : (
        <img src={img} className='imgCompImage' alt={name} />
      )}
      {isLoading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Skeleton.Input style={{ width: '80%', marginBottom:"3px" }} active />
          <Skeleton.Input style={{ width: '50%' }} active />
        </div>
      ) : (
        <>
          <h3 className='candidateName'>{name}</h3>
          <p className='symbolName'>{symbol}</p>
        </>
      )}
    </div>
  );
};

export default ImageComp;
