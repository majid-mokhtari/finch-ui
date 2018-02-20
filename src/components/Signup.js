import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Tcomb from 'tcomb-form-native';

const { Form } = Tcomb.form;    
const User = Tcomb.struct({
  name: Tcomb.String,
  location: Tcomb.String,
  birthday: Tcomb.String,
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
        name: {
          label: 'Name',
          placeholder: 'Please enter name',
          error: 'Insert your name',
          stylesheet: inputStyles
        },
        location: {
          label: 'Location',
          placeholder: 'Please enter location',
          error: 'Insert location',
          stylesheet: inputStyles
        },
        birthday: {
          label: 'Birthday',
          placeholder: 'Please enter birthday',
          error: 'Insert a valid birthday',
          stylesheet: inputStyles
        },
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
    constructor(props){
      super();
      this.state = {
        value: {
          name: "",
          location: "",
          birthday: "",
          email: "",
          password: "",
          confirm_password: ""
        }
      }
    }
    onLoginPress() {
      let value = this.refs.form.getValue();
      const { userActions } = this.props;
      if (value) { 
        userActions.signupUser(value);
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
                onPress={this.onLoginPress.bind(this)} 
                underlayColor='#99d9f4'
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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