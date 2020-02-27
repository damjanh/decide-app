import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Button from './Action';
import Options from './Options';
import AddOption from './AddOption';

const jsx = (
    <div>
        <Header />
        <Button />
        <Options />
        <AddOption />
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
