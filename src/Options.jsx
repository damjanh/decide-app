import React from 'react';

import Option from './Option';

class Options extends React.Component {
    constructor() {
        super();
        this.state = {
            options: ['Option One', 'Option Two'],
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

export default Options;
