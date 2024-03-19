
import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards';
import cards from './Data';
import Modal from './Modal';

function App() {
  const [data, setData] = useState(cards);
  const [showModal, setShowModal] = useState(false)
  function openModal() {
      setShowModal(true)
  }
  function closeModal(){
      setShowModal(false)
  }
  

  const shuffleCards = () => {
    const shuffleArray = array => {
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
      <h4>Current score: 0</h4>
      <h4>High score: 0</h4>
      <Cards data={data} shuffleCards={shuffleCards} openModal={openModal}/>
      {showModal && <Modal  closeModal={closeModal}/>}
    </>
  );
}

export default App;
