import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

const appData = {
    title: 'Decide App',
    subTitle: 'Let the computer decice!',
};
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
        this.setState((prevState) => ({
            options: [...prevState.options, newOption],
        }));
    }

    handleRemoveOption(removeOption) {
        this.setState((prevState) => {
            const newOptions = prevState.options.filter((item) => item !== removeOption);
            return ({ options: newOptions });
        });
    }

    handleDecide(selectedIndex) {
        const { options } = this.state;
        const selectedOption = options[selectedIndex];
        console.log(`Selected option is: ${selectedOption}`);
    }

    render() {
        const { options } = this.state;
        return (
            <div>
                <Header title={appData.title} subTitle={appData.subTitle} />
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
