import React from 'react';
import SingleImage from './SingleImage';
const Images = ({ title, root }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          width: '50vw',
          height: '20vh',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <SingleImage root={root} fileName="0.jpg" />
        <SingleImage root={root} fileName="1.jpg" />
        <SingleImage root={root} fileName="2.jpg" />
      </div>
    </div>
  );
};

export default Images;
