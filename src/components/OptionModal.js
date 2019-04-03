import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (

    <Modal
        className="modal"
        closeTimeoutMS={200}
        contentLabel="Selected Option"
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleDeleteSelected}
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleDeleteSelected}>Okay</button>
    </Modal>

);

export default OptionModal;