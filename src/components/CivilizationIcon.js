import React from 'react';

const CivilizationIcon = ({ imageUrl, altText }) => (
  <img
    src={imageUrl}
    alt={altText}
    style={{
      width: '80px',
      borderRadius: '50%',
      marginBottom: '20px',
      boxShadow: '1px 1px 6px rgba(0,0,0,0.2)'
    }}
  />
);

export default CivilizationIcon;
