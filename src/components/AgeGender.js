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

    render() {
      const { gender } = this.state;

      return (
            <View style={styles.container}>

                <View style={{flex: 1, justifyContent: "center"}}>
                    <View style={{ alignItems: 'center'}}>
                        <Text style={{marginBottom: 40, fontSize: 20}}>What is your date of birth?</Text>
                    </View>
                    <View>
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
                            style={styles.radioButton} 
                            onPress={() => {console.log("df")}} 
                            underlayColor='#99d9f4'
                        >
                            <Text style={styles.radioButtonText}>Male</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.radioButton} 
                            onPress={() => {console.log("df")}} 
                            underlayColor='#99d9f4'
                        >
                            <Text style={styles.radioButtonText}>Female</Text>
                        </TouchableHighlight>
                    </View>
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
  radioButton: {
    width: 100,
    height: 50,
    backgroundColor: 'lightgrey',
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

export default AgeGender;