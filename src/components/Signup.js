import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import Tcomb from 'tcomb-form-native';
import moment from 'moment';
import DatePicker from './DatePicker';

var Gender = Tcomb.enums({
  M: 'Male',
  F: 'Female'
});

const { Form } = Tcomb.form;    
const User = Tcomb.struct({
  name: Tcomb.String,
  gender: Gender,
  city: Tcomb.String,
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
        city: {
          label: 'City',
          placeholder: 'Please enter location',
          error: 'Insert location',
          stylesheet: inputStyles
        },
        gender: {
          label: 'Gender',
          placeholder: 'Please enter gender',
          error: 'Insert a valid gender',
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
          error: 'Insert a valid password',
          stylesheet: inputStyles
        }
      }
};

class Signup extends Component {
    constructor(props){
      super();
      this.state = {
        stage: "first",
        value: {
          name: "",
          location: "",
          email: "",
          password: "",
          gender: ""
        }
      }
    }
    onLoginPress() {
      let value = this.refs.form.getValue();
      const { userActions } = this.props;
      if (value) { 
        userActions.signupUser(value);
        console.log(value)
      }
    }

    render() {
      const { stage } = this.state;
      if(stage === "first"){
        return (
          <DatePicker />
        )
      }
      return (
          <ScrollView style={styles.container}>
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
          </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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