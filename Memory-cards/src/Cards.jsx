import React from 'react';
import './App.css';

const Cards = ({ data }) => {
  return (
    <div className="container">
      {data.map(card => (
        <div className="card" key={card.id}>
         <div class='name'>{card.name}</div>
        <img src={card.img} alt={card.name} />
         
        </div>
      ))}
    </div>
  );
};

export default Cards;
