

const Modal = ({closeModal}) => {

    return(
        <div className="modal-overlay">
         <div className="modal-content">
            <h2>Game Over!</h2>
            <p>Your score: </p>
            <button onClick={closeModal}>Play Again?</button>
        </div>
    </div>
    )
}

export default Modal;