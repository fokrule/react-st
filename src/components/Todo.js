import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';
function Todo(props) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    function deleteHandler () {
        setModalIsOpen(true);
    }
    function closeModalHandler () {
        setModalIsOpen(false);
    }

    return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />} {/* if modal is open true*/}
      { modalIsOpen && <Backdrop onClick={closeModalHandler}/> } {/* if modal is open true*/}
    </div>
    )
}

export default Todo;