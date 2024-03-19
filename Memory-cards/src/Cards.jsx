
import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';
const Cards = ({ data, shuffleCards, openModal }) => {
    const [clickedCard, setClickedCards] = useState([])
  const handleCardClick = (card) => {
    if(clickedCard.includes(card)){
        openModal()
        setClickedCards([])
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

