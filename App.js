import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store';
import Router from './src/config/routes';

const store = configureStore();

export default App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}