import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import Tcomb from 'tcomb-form-native';
import moment from 'moment';
import AgeGender from './AgeGender';

const { Form } = Tcomb.form;    
const User = Tcomb.struct({
  name: Tcomb.String,
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
        birthdate: "",
        gender: 'M',
        value: {
          name: "",
          location: "",
          email: "",
          password: "",
        }
      }
    }
    onSignupPress() {
      let value = this.refs.form.getValue();
      const { birthdate, gender } = this.state;
      value = Object.assign({ birthdate, gender }, value);
      const { userActions } = this.props;
      if (value) { 
        userActions.signupUser(value);
      }
    }

    onDatePickerChange(birthdate){
      this.setState({ birthdate });
    }

    onNextPress(gender){
      this.setState({ gender, stage: "second"});
    }

    render() {
      const { stage } = this.state;
      if(stage === "first"){
        return (
          <AgeGender 
            onDatePickerChange={this.onDatePickerChange.bind(this)}
            gender={this.state.gender}
            onNextPress={this.onNextPress.bind(this)}
          />
        )
      } 
      return (
          <View style={styles.container}>
            <Form
                ref="form"
                type={User}
                options={options}
            />
            <TouchableHighlight 
                style={styles.button} 
                onPress={this.onSignupPress.bind(this)} 
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
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  button: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

export default Signup;