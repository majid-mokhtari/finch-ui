import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Carousel from './Carousel';

class Login extends Component {

    async logInFacebook() {
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

    render(){
        return (
            <View style={styles.loginWrapper}>
                <View style={styles.carousel}>
                    <Carousel />
                </View>
                <View style={styles.fbBtn}>
                  <Button
                      onPress={this.logInFacebook.bind(this)}
                      title="LOGIN WITH FACEBOOK"
                      color="white" />
                </View>
                <View style={styles.phoneBtn}>
                  <Button
                      onPress={this.logInFacebook.bind(this)}
                      title="LOGIN WITH EMAIL"
                      color="grey" />
                </View>
                <View style={styles.terms}>
                    <Text style={styles.firstText}>
                        We don't post anything on Facebook 
                    </Text>
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
    height: '50%',
    width: '80%',
    marginBottom: 50,
    borderRadius: 10
  },
  loginWrapper: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  fbBtn: {
    backgroundColor: "#4267b2",
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
    marginTop: 20
  },
  firstText: {
    width: '80%'
  },
  secondText: {
    width: '80%', 
    marginTop: 10, 
    textAlign: 'center', 
    lineHeight: 20
  }
});

export default Login;