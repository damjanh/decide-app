import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
    const { option, index, handleRemoveOption } = props;
    return (
        <div className="option">
            <p className="option__text">
                {index}
                .&nbsp;
                {option}
            </p>
            <button
                className="button button--link"
                type="button"
                onClick={() => {
                    handleRemoveOption(option);
                }}
            >
                Remove
            </button>
        </div>
    );
};

Option.propTypes = {
    option: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleRemoveOption: PropTypes.func.isRequired,
};

export default Option;
