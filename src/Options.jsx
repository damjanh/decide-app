import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const Options = (props) => {
    const { options, handleDeleteOptions } = props;
    return (
        <div>
            <button type="button" onClick={handleDeleteOptions}>Remove All</button>
            <ul>
                {
                    options.map((option, index) => (
                        <Option key={index.toString()} option={option} />
                    ))
                }
            </ul>
        </div>
    );
};

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleDeleteOptions: PropTypes.func.isRequired,
};

export default Options;
