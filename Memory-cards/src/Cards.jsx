import React from 'react';

const Cards = ({ data }) => {
  return (
    <div>
      {data.map(card => (
        <div key={card.id}>
          <div>{card.name}</div>
          <img src={card.img} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
