import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
    const { option, handleRemoveOption } = props;

    const remove = () => {
        handleRemoveOption(option);
    };

    return (
        <li>
            <h3>{option}</h3>
            <button type="button" onClick={remove}>Remove</button>
        </li>
    );
};

Option.propTypes = {
    option: PropTypes.string.isRequired,
    handleRemoveOption: PropTypes.func.isRequired,
};

export default Option;
