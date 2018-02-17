import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Tcomb from 'tcomb-form-native';

const { Form } = Tcomb.form;    
const User = Tcomb.struct({
  email: Tcomb.String,             
  password: Tcomb.String,  
});
const options = {
    fields: {
        email: {
          label: 'Email',
          placeholder: 'Please enter email',
          error: 'Insert a valid email'
        },
        password: {
          label: 'Password',
          placeholder: 'Please enter password'
        }
      }
};

class Login extends Component {

    onPress() {
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
          console.log(value); // value here is an instance of Person
        }
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
                onPress={this.onPress.bind(this)} 
                underlayColor='#99d9f4'
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
        );
      }
}

var styles = StyleSheet.create({
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
    justifyContent: 'center'
  }
});

export default Login;