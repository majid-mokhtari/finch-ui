import React, { Component } from 'react';
import { View,  Button } from 'react-native';

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
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Button
                    onPress={this.logInFacebook.bind(this)}
                    title="LOGIN IN WITH FACEBOOK"
                    color="skyblue"
                >LOGIN WITH FACEBOOK</Button>
          </View>
        )
    }
}

export default Login;