import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const Options = (props) => {
    const { options, handleDeleteOptions, handleRemoveOption } = props;
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options:</h3>
                <button
                    className="button button--link"
                    type="button"
                    onClick={handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>
            {
                options.length === 0 && <p className="widget__message">No options to choose from.</p>
            }
            <div>
                {
                    options.map((option, index) => (
                        <Option
                            key={index.toString()}
                            option={option}
                            index={index + 1}
                            handleRemoveOption={handleRemoveOption}
                        />
                    ))
                }
            </div>
        </div>
    );
};

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleDeleteOptions: PropTypes.func.isRequired,
    handleRemoveOption: PropTypes.func.isRequired,
};

export default Options;
