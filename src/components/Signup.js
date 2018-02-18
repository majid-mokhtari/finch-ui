import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Tcomb from 'tcomb-form-native';

const { Form } = Tcomb.form;    
const User = Tcomb.struct({
  email: Tcomb.String,             
  password: Tcomb.String,  
});
const inputStyles = {
  ...Form.stylesheet,
  textbox: {
    ...Form.stylesheet.textbox,
    normal: {
      ...Form.stylesheet.textbox.normal,
      height: 50
    },
    error: {
      ...Form.stylesheet.textbox.error,
      height: 50
    }
  }
}
const options = {
    fields: {
        email: {
          label: 'Email',
          placeholder: 'Please enter email',
          error: 'Insert a valid email',
          stylesheet: inputStyles
        },
        password: {
          label: 'Password',
          placeholder: 'Please enter password',
          stylesheet: inputStyles
        }
      }
};

class Signup extends Component {

    onLoginPress() {
        let value = this.refs.form.getValue();
        if (value) { 
          console.log(value);
        }
      }
    
    onForgotPassPress(){
        console.log("worked")
    }

    render() {
        return (
            <View style={styles.container}>
              <Form
                  ref="form"
                  type={User}
                  options={options}
              />
              <TouchableHighlight 
                  style={styles.button} 
                  onPress={this.onLoginPress.bind(this)} 
                  underlayColor='#99d9f4'
              >
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableHighlight>
              <Text 
                  style={styles.forgotPassText} 
                  onPress={this.onForgotPassPress.bind(this)}  >
                  Forgot your password?
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 10
  },
  forgotPassText: {
    padding: 20,
    textAlign: 'center',
    color: '#FF7575'
  }
});

export default Signup;