import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let contacts = [
    {
        id: 1,
        name: 'Scott',
        phone: '555 333 555'
    },
    {
        id: 2,
        name: 'Irfan',
        phone: '953 658 468'
    },
    {
        id: 3,
        name: 'Afrin',
        phone: '658 486 979'
    },
    {
        id: 4,
        name: 'Taky',
        phone: '986 745 852'
    }
]

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('root'));
registerServiceWorker();
