
import React, { useState } from 'react';
import './App.css';

const Cards = ({ data, shuffleCards }) => {
    const [clickedCard, setClickedCards] = useState([])
  const handleCardClick = (card) => {
    if(clickedCard.includes(card)){
      console.log('vec imamo karticu')
    }else{
        setClickedCards([...clickedCard, card]);
        shuffleCards();
    }
  };
  {console.log(clickedCard)}

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

