import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import store from './redux/store'

const render = () => {
    ReactDOM.render(<App store={store}/>, document.querySelector('#root'));
};

render();

store.subscribe(render);
