import React from 'react';

const SingleImage = ({ root, fileName }) => {
  return (
    <img
      src={`${root}/${fileName}`}
      alt="cute animal"
      style={{ height: '100%', width: 'auto' }}
    />
  );
};

export default SingleImage;
