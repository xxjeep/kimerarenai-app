import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleSelectedOption}
    closeTimeoutMS={250}
    className="modal"
  >
    <h3 className="modal__title">結果</h3>
    { props.selectedOption && <p className="modal__body">{ props.selectedOption }</p>}
    <button
    className="button"
    autoFocus
    onClick={props.handleSelectedOption}
    >
      Ok
    </button>
  </Modal>
);

export default OptionModal;