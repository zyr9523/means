import React from 'react';
import ReactDOM from 'react-dom';

// import App from './react-redux/App';
// import store from './react-redux/store';
// import {Provider} from 'react-redux';
// let render = ()=>{
//     ReactDOM.render(<App/>, document.getElementById('root'));
// }
// render();
// store.subscribe(render);
// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// import App from './todolist/App';
// import {Provider} from 'react-redux';
// import store from './todolist/store';
// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// import App from './start/App';

import App from './investigation/App';
import store from './investigation/store';
import {Provider} from 'react-redux';
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


// import App from './filter/App';
// import {Provider} from 'react-redux';
// import store from './filter/store';
// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


            
    
