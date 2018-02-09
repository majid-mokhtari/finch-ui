import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ENTRIES1 } from '../images/entries';

class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.description}>
                <Image 
                    style={{flex: 1, borderRadius: 10}}
                    source={{uri: item.illustration}}
                    onPress={() => {this._onPress.bind(this)}}
                />
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    _onPress(){
        Alert.alert("dsf");
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES1}
              renderItem={this._renderItem}
              sliderWidth={300}
              itemWidth={300}
            />
        );
    }
}

const styles = StyleSheet.create({
    description: {
        flex: 1,

    },
    title: {
        marginTop: 20
    }
  });

export default MyCarousel;