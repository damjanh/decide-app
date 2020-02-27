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
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        this.setState({
            options: [],
        });
    }

    render() {
        const { options } = this.state;
        return (
            <div>
                <button type="button" onClick={this.handleRemoveAll}>Remove All</button>
                <ul>
                    {
                        options.map((option, index) => (
                            <Option key={index.toString()} option={option} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Options;
