import React from 'react';
import PropTypes from 'prop-types';

class AddOption extends React.Component {
    constructor() {
        super();
        this.state = {
            error: undefined,
        };
        this.handleOptionSubmit = this.handleOptionSubmit.bind(this);
    }

    handleOptionSubmit(event) {
        const { handleAddOption } = this.props;
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = handleAddOption(option);

        this.setState({ error });
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                {error && <p>{error}</p>}
                <form onSubmit={this.handleOptionSubmit}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

AddOption.propTypes = {
    handleAddOption: PropTypes.func.isRequired,
};

export default AddOption;
