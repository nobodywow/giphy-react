import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createAppStore } from './store/store';

ReactDOM.render(
    <Provider store={createAppStore()}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
