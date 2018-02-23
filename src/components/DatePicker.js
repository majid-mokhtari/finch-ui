import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

const dateFormat = "YYYY-MM-DD";

class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
        date: moment().format(dateFormat)
    }
  }

  onDatePickerChange(date){
    this.setState({date});
    this.props.onDatePickerChange(date);
  }

  render(){
    return (
      <DatePicker
        style={{width: 300}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={this.onDatePickerChange.bind(this)}
      />
    )
  }
}

export default MyDatePicker;