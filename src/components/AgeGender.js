import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import moment from 'moment';
import DatePicker from './DatePicker';

class AgeGender extends Component {

    constructor(props){
        super();
        this.state = {
            gender: "M"
        }
    }
    onDatePickerChange(date){
      this.props.onDatePickerChange(date);
    }

    onNextPress(){
        const { gender } = this.state;
        this.props.onNextPress(gender);
    }

    render() {
      const { gender } = this.state;
      const { radioButton, activeRadioButton } = styles;
      let maleStyle = gender === "M" ? activeRadioButton : radioButton; 
      let femaleStyle = gender === "F" ? activeRadioButton : radioButton;
      return (
            <View style={styles.container}>

                <View style={{flex: 1, justifyContent: "center"}}>
                    <View style={{ alignItems: 'center'}}>
                        <Text style={{marginBottom: 40, fontSize: 20}}>What is your date of birth?</Text>
                    </View>
                    <View style={{marginRight: 40}}>
                        <DatePicker 
                            onDatePickerChange={this.onDatePickerChange.bind(this)}
                        />
                    </View>
                </View>
                
                <View style={{flex: 1}}>
                    <View style={{ alignItems: 'center'}}>
                        <Text style={{marginBottom: 20, fontSize: 20}}>
                            What is your gender?
                        </Text>
                    </View>
                    <View style={styles.radioButtonsView}>
                        <TouchableHighlight 
                            style={maleStyle} 
                            onPress={() => this.setState({gender: "M"})} 
                            underlayColor='#99d9f4'
                        >
                            <Text style={styles.radioButtonText}>Male</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={femaleStyle} 
                            onPress={() => this.setState({gender: "F"})} 
                            underlayColor='#99d9f4'
                        >
                            <Text style={styles.radioButtonText}>Female</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.nextButtonView}>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.onNextPress.bind(this)} 
                        underlayColor='#99d9f4'
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableHighlight>
                </View>

            </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRadioButton: {
    width: 100,
    height: 50,
    backgroundColor: '#79E9FF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5
  },
  radioButton: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5
  },
  radioButtonText: {
    fontSize: 15
  },
  radioButtonsView: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButtonView: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  button: {
    height: 50,
    width: 240,
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

export default AgeGender;