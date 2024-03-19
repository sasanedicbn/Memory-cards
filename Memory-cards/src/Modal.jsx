const Modal = ({ closeModal, clickedCard, setClickedCards }) => {
    const handlePlayAgain = () => {
      closeModal();
      setClickedCards([]);
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Game Over!</h2>
          <p>Your score: {clickedCard.length}</p>
          <button onClick={handlePlayAgain}>Play Again?</button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  