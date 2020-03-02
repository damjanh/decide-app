import React from 'react';
import PropTypes from 'prop-types';

class AddOption extends React.Component {
    state = {
        error: undefined,
    };

    handleOptionSubmit = (event) => {
        const { handleAddOption } = this.props;
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = handleAddOption(option);

        this.setState({ error });
        const opt = event.target.elements.option;
        opt.value = '';
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                {error && <p className="add-option-error">{error}</p>}
                <form className="add-option" onSubmit={this.handleOptionSubmit}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

AddOption.propTypes = {
    handleAddOption: PropTypes.func.isRequired,
};

export default AddOption;
