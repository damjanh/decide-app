import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Button from './Action';

const jsx = (
    <div>
        <Header />
        <Button />
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
