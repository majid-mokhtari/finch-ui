import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Carousel from './Carousel';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

class Welcome extends Component {

    async onjoinUsClick() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('575699949448392', {
            permissions: ['public_profile'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert(
            'Logged in!',
            `Hi ${(await response.json()).name}!`,
          );
        }
      }

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
                <View style={styles.carousel}>
                    <Carousel />
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
  carousel: {
    height: '65%',
    marginBottom: 20,
    borderRadius: 10
  },
  welcomeWrapper: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
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