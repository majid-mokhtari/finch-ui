import React, { Component } from 'react'
import { View } from 'react-native';
import Cards from './../components/Cards';

class HomeContainer extends Component {
    render(){
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Cards  />
            </View>
        )
    }
}

export default HomeContainer;