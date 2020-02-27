import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
    const { option } = props;
    return (
        <li>
            <h3>{option}</h3>
        </li>
    );
};

Option.propTypes = {
    option: PropTypes.string.isRequired,
};

export default Option;
