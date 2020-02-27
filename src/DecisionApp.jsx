import React from 'react';

import Header from './Header';
import Button from './Action';
import Options from './Options';
import AddOption from './AddOption';

class DecisionApp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <Button />
                <Options />
                <AddOption />
            </div>
        );
    }
}

export default DecisionApp;
