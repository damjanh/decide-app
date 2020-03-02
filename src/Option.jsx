import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
    const { option, handleRemoveOption } = props;
    return (
        <div className="option">
            {option}
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
    handleRemoveOption: PropTypes.func.isRequired,
};

export default Option;
