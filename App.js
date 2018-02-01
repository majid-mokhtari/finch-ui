import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Cards from './src/components/Cards';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Cards />
      </View>
    );
  }
}
