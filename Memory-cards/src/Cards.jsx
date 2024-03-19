
import React from 'react';
import './App.css';

const Cards = ({ data, handleCardClick,setClickedCards }) => {
  return (
    <div className="container">
      {data.map((card, index) => (
        <div className="card" key={index} onClick={() => handleCardClick(card)}>
          <div className='name'>{card.name}</div>
          <img src={card.img} alt={card.name} />
        </div>
      ))}
    </div>
  );
};

export default Cards;

