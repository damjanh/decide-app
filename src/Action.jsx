import React from 'react';
import PropTypes from 'prop-types';

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handleDecideClick = this.handleDecideClick.bind(this);
    }

    handleDecideClick() {
        const { optionsLength, handleDecide } = this.props;
        const selectedIndex = Math.floor(Math.random() * optionsLength);
        handleDecide(selectedIndex);
    }

    render() {
        const { optionsLength } = this.props;
        return (
            <button
                type="button"
                onClick={this.handleDecideClick}
                disabled={optionsLength === 0}
            >
                Decide!
            </button>
        );
    }
}

Action.propTypes = {
    optionsLength: PropTypes.number.isRequired,
    handleDecide: PropTypes.func.isRequired,
};

export default Action;
