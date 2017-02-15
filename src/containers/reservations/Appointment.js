import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Calendar from './../../components/reservar/Calendar';
import TimingList from './../../components/reservar/TimingList';
import { fetchTimings } from './../../actions/timings';
import FormButtom from './../../components/FormButtom';

class Appointment extends Component {

  static propTypes = {
    timingsReducer : PropTypes.object.isRequired,
    timings : PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state={
      selectedDate: new Date(),
      selectedTime: {}
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeSelect = this.onTimeSelect.bind(this);
  }

  componentDidMount() {

    this.props.dispatch(fetchTimings());
  }

  onDateChange(date) {
    this.setState({ selectedDate: date });
  }

  onTimeSelect(time) {
    this.setState({ selectedTime: time });
  };

  render() {
    const {timings,timingsReducer} = this.props;

    return (
      <ScrollView
        style={{ flex:1, backgroundColor:'white' }}
        contentContainerStyle={{paddingVertical:64}}
        ref="scrollView"
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      >
        <Calendar
          selectedDate={this.state.selectedDate}
          onDateChange={this.onDateChange}
        />
        <TimingList
          timings={timings}
          selectedTime={this.state.selectedTime}
          onTimeSelect={this.onTimeSelect}
          timingsReducer={timingsReducer}
        />

        <FormButtom
          onPress={() => Actions.confirmation() }
          buttonText='Next'
          containerStyle={{padding:5,margin:10,marginTop:0,marginBottom:0,backgroundColor:'tomato',opacity:0.7}}
        />

      </ScrollView>
    );
  }
}


function mapStateToProps(state,ownProps) {
  const { entities } = state;

  return {
    timingsReducer:state.timingsReducer,
    timings:entities.timings
  }
}

export default connect(mapStateToProps)(Appointment)
