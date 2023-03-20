import React from 'react';

const Card = ( {children, img } ) => {

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      { children }
    </div>
  );
};

export default Card;
