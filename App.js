import React, {Component} from 'react'
import { View } from 'react-native'
import { Provider, connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import AppContainer from './src/containers/AppContainer'

import Routes from './src/config/routes'

import getStore from './src/store'

const store = getStore();

export default App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}