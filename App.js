import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Cards from './src/components/Cards';
import Login from './src/components/Login';

export default class App extends Component {
  render() {
    const isLoggedIn = false;
    const content = isLoggedIn ? (
      <Cards />
    ) : (
      <Login />
    );
    return (
      <View style={{flex: 1}}>
        {content}
      </View>
    );
  }
}
