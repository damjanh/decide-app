import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Decide App',
            subTitle: 'Let the computer decice!',
        };
    }

    render() {
        const { title, subTitle } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </div>
        );
    }
}

export default Header;
