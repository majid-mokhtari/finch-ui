import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import WelcomeCarousel from './Carousel';

class Welcome extends Component {

    onEmailLoginClick(){
      this.props.userActions.resetData()
      Actions.auth("login");
    }

    onjoinUsClick(){
      Actions.auth("signup");
    }

    render(){
        return (
            <View style={styles.welcomeWrapper}>
                <View >
                    <WelcomeCarousel />
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
    marginTop: 20,
  },
  joinUsBtn: {
    backgroundColor: "red",
    padding: 5,
    width: '80%',
    borderRadius: 10
  },
  phoneBtn: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 10,
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