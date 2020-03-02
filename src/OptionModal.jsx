import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OptionModal = (props) => {
    const { selectedOption, handleCloseModal } = props;
    return (
        <Modal
            isOpen={selectedOption !== 'undefined'}
            contentLabel="Selected Option"
            onRequestClose={handleCloseModal}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {selectedOption !== 'undefined' && <p className="modal__body">{selectedOption}</p>}
            <button
                className="button"
                type="button"
                onClick={handleCloseModal}
            >
                Okay
            </button>
        </Modal>
    );
};

Modal.setAppElement('#app');

OptionModal.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
};

export default OptionModal;
