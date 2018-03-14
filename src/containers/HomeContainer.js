import React, { Component } from 'react'
import { View } from 'react-native';
import Card from './../components/Card';

class HomeContainer extends Component {
    render(){
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Card  />
            </View>
        )
    }
}

export default HomeContainer;