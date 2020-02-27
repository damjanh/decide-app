import React from 'react';

import Header from './Header';
import Button from './Action';
import Options from './Options';
import AddOption from './AddOption';

const appData = {
    title: 'Decide App',
    subTitle: 'Let the computer decice!',
};
class DecisionApp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title={appData.title} subTitle={appData.subTitle} />
                <Button />
                <Options />
                <AddOption />
            </div>
        );
    }
}

export default DecisionApp;
