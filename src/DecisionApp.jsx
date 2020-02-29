import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class DecisionApp extends React.Component {
    state = {
        options: this.props.options,
    };

    componentDidMount() {
        let options;
        try {
            options = JSON.parse(localStorage.getItem('options'));
        } catch (_) {
            // Ignore
        }
        if (options) {
            this.setState({
                options,
            });
        }
    }

    componentDidUpdate(_, prevState) {
        const { options } = this.state;
        if (prevState.options.length !== options.length) {
            localStorage.setItem('options', JSON.stringify(options));
        }
    }

    handleDeleteOptions = () => {
        this.setState({
            options: [],
        });
    }

    handleAddOption = (newOption) => {
        if (!newOption) {
            return 'Enter a valid option.';
        }
        const { options } = this.state;
        if (options.indexOf(newOption) > -1) {
            return 'Item already exists.';
        }
        this.setState((prevState) => ({
            options: [...prevState.options, newOption],
        }));
        return undefined;
    }

    handleRemoveOption = (removeOption) => {
        this.setState((prevState) => {
            const newOptions = prevState.options.filter((item) => item !== removeOption);
            return ({ options: newOptions });
        });
    }

    handleDecide = () => {
        const { options } = this.state;
        const selectedIndex = Math.floor(Math.random() * options.length);
        const selectedOption = options[selectedIndex];
        console.log(`Selected option is: ${selectedOption}`);
    }

    render() {
        const { options } = this.state;
        return (
            <div>
                <Header />
                <Action optionsLength={options.length} handleDecide={this.handleDecide} />
                <Options
                    options={options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

DecisionApp.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
};

DecisionApp.defaultProps = {
    options: [],
};

export default DecisionApp;
