import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  TextInput
} from 'react-native'

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    return (
        
      <View style={styles.container}>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        >
        <DatePickerIOS
        date={this.state.chosenDate}
        onDateChange={this.setDate}
      />
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})

export default DatePicker;