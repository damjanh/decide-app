import React from 'react';
import PropTypes from 'prop-types';

const Action = (props) => {
    const { optionsLength, handleDecide } = props;
    return (
        <button
            className="big-button"
            type="button"
            onClick={handleDecide}
            disabled={optionsLength === 0}
        >
            Decide!
        </button>
    );
};

Action.propTypes = {
    optionsLength: PropTypes.number.isRequired,
    handleDecide: PropTypes.func.isRequired,
};

export default Action;
