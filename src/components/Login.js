import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
                <View style={styles.fbBtn}>
                  <Button
                      onPress={this.logInFacebook.bind(this)}
                      title="LOGIN IN WITH FACEBOOK"
                      color="white" />
                </View>
                <View style={styles.phoneBtn}>
                  <Button
                      onPress={this.logInFacebook.bind(this)}
                      title="LOGIN IN WITH PHONE NUMBER"
                      color="grey" />
                </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 2
  },
  fbBtn: {
    backgroundColor: "#4267b2",
    padding: 5,
    width: '80%',
    borderRadius: 50
  },
  phoneBtn: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 5,
    width: '80%',
    borderRadius: 50,
    marginTop: 10
  },
});

export default Login;