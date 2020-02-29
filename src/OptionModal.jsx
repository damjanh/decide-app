import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OptionModal = (props) => {
    const { selectedOption, handleCloseModal } = props;
    return (
        <Modal
            isOpen={selectedOption !== 'undefined'}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            <p>{selectedOption}</p>
            <button type="button" onClick={() => { handleCloseModal(); }}>Ok</button>
        </Modal>
    );
};

Modal.setAppElement('#app');

OptionModal.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
};

export default OptionModal;
