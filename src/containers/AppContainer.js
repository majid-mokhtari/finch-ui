import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'

import {connect} from 'react-redux'

import Login from './../components/Login'

class AppContainer extends Component {

    render(){
        
        return (
            <View style={{flex: 1}}>
                {Login}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})

export default connect(state => ({shows: state.shows}))(AppContainer)