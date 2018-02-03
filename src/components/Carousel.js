import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ENTRIES1 } from '../images/entries';

class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.description}>
                <Text >{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES1}
              renderItem={this._renderItem}
              sliderWidth={290}
              itemWidth={270}
              onPress={() => { Alert.alert("fd") }}
            />
        );
    }
}

const styles = StyleSheet.create({
    description: {
        backgroundColor: 'yellow'
    }
  });

export default MyCarousel;