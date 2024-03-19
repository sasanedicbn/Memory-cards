import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards';
import cards from './Data';
import Modal from './Modal';

function App() {
  const [data, setData] = useState(cards);
  const [showModal, setShowModal] = useState(false);
  const [clickedCard, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0); 

  const handleCardClick = (card) => {
    if (clickedCard.includes(card)) {
      openModal();
      if (clickedCard.length > highScore) { 
        setHighScore(clickedCard.length); 
      }
    } else {
      setClickedCards([...clickedCard, card]);
      shuffleCards();
    }
  };

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const shuffleCards = () => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setData(shuffleArray([...data]));
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <h1>Rick and Morty memory game</h1>
      <h4>Current score: {clickedCard.length}</h4>
      <h4>High score: {highScore}</h4>
      <Cards
        data={data}
        shuffleCards={shuffleCards}
        openModal={openModal}
        handleCardClick={handleCardClick}
      />
      {showModal && <Modal closeModal={closeModal} clickedCard={clickedCard} setClickedCards={setClickedCards} />}
    </>
  );
}

export default App;
