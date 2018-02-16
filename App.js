import React, {Component} from 'react'
import { Provider } from 'react-redux'
import AppContainer from './src/containers/AppContainer'
import configureStore from './src/store';

//TODO
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import Routes from './src/config/routes'

const store = configureStore();

export default App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}