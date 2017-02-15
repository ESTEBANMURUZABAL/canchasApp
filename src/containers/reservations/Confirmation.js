import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import AppointmentConfirm from './../../components/reservar/AppointmentConfirm';

class Confirmation extends Component {

  render() {
    return (
        <AppointmentConfirm
          selectedTime={this.props.selectedTime}
          selectedDate={this.props.selectedDate}
        />
    );
  }
}

function mapStateToProps(state,props) {
  const { entities } = state;

  return {
    selectedTime: state.selectedTime,
    selectedDate: state.selectedDate

  }
}

export default connect(mapStateToProps)(Confirmation)



