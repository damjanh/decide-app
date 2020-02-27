import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class DecisionApp extends React.Component {
    constructor() {
        super();
        this.state = {
            options: ['Option One', 'Option Two', 'Opton Three'],
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDecide = this.handleDecide.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }

    handleDeleteOptions() {
        this.setState({
            options: [],
        });
    }

    handleAddOption(newOption) {
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

    handleRemoveOption(removeOption) {
        this.setState((prevState) => {
            const newOptions = prevState.options.filter((item) => item !== removeOption);
            return ({ options: newOptions });
        });
    }

    handleDecide() {
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

export default DecisionApp;
