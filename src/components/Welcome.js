import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
//import Carousel from './Carousel';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import DeckSwiperExample from './Carousel';

class Welcome extends Component {

    onEmailLoginClick(){
      const { userActions, userReducer } = this.props;
      Actions.login({ userActions, userReducer });
    }

    onjoinUsClick(){
      const { userActions, userReducer } = this.props;
      Actions.signup({ userActions, userReducer });
    }

    render(){
      const { data } = this.props.userReducer;
        return (
            <View style={styles.welcomeWrapper}>
                <View >
                    <Image 
                      source={require('../images/match.png')}
                      style={styles.imageStyle}
                    />
                </View>
                <View style={styles.joinUsBtn}>
                  <Button
                      onPress={this.onjoinUsClick.bind(this)}
                      title="JOIN US"
                      color="white" />
                </View>
                <View style={styles.phoneBtn}>  
                  <Button
                      onPress={this.onEmailLoginClick.bind(this)}
                      title="LOGIN WITH EMAIL"
                      color="grey" />
                </View>
                <View style={styles.terms}>
                    <Text style={styles.secondText}>
                        By signing, you agree to our terms of Service and Privacy Policy 
                    </Text>
                </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  welcomeWrapper: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  imageStyle: {
    width: 300, 
    height: 450, 
    marginBottom: 30,
    borderRadius: 5
  },
  joinUsBtn: {
    backgroundColor: "red",
    padding: 5,
    width: '80%',
    borderRadius: 40
  },
  phoneBtn: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 50,
    marginTop: 15
  },
  terms: {
    width: '80%',
    alignItems: 'center',
    marginTop: 15
  },
  secondText: {
    width: '80%', 
    textAlign: 'center', 
    lineHeight: 20
  }
});

export default Welcome;