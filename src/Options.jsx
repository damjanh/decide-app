import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

class Options extends React.Component {
    constructor(props) {
        super(props);
        const { options } = props;
        this.state = {
            options,
        };
    }

    render() {
        const { options } = this.state;
        return (
            <ul>
                {
                    options.map((option, index) => (
                        <Option key={index.toString()} option={option} />
                    ))
                }
            </ul>
        );
    }
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Options;
