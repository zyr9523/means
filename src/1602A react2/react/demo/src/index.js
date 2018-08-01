import React from 'react';
import ReactDOM from 'react-dom';

// import App from './fmz/App';
// import {Provider} from 'react-redux';
// import store from './fmz/store';
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


import App from './addvalue/App';
import {Provider} from 'react-redux';
import store from './addvalue/store';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));