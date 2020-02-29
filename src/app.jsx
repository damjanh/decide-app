import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import DecisionApp from './DecisionApp';

ReactDOM.render(<DecisionApp options={['Go watch TV', 'Read a book']} />, document.getElementById('app'));
