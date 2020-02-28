import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const Options = (props) => {
    const { options, handleDeleteOptions, handleRemoveOption } = props;
    return (
        <div>
            <button type="button" onClick={handleDeleteOptions}>Remove All</button>
            {
                options.length === 0 && <p>No options to choose from.</p>
            }
            <ul>
                {
                    options.map((option, index) => (
                        <Option
                            key={index.toString()}
                            option={option}
                            handleRemoveOption={handleRemoveOption}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleDeleteOptions: PropTypes.func.isRequired,
    handleRemoveOption: PropTypes.func.isRequired,
};

export default Options;
