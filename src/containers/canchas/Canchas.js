import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CanchasList from './../../components/canchas/CanchasList';
import { fetchCanchas } from './../../actions/canchas';
import {connect} from 'react-redux';

class Canchas extends Component {
  static propTypes = {
    canchasReducer : PropTypes.object.isRequired,
    canchas : PropTypes.object.isRequired
  };

 constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchCanchas());
  }

  render() {
    const {canchas, canchasReducer} = this.props;
    return (
      <ScrollView
        style={{ flex:1, backgroundColor:'white' }}
        contentContainerStyle={{paddingVertical:64}}
        ref="scrollView"
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      >
        <CanchasList
          canchas={canchas}
          canchasReducer={canchasReducer}
        />
      </ScrollView>  
    );
  }
}

function mapStateToProps(state,ownProps) {
  const { entities } = state;

  return {
    canchasReducer:state.canchasReducer,
    canchas:entities.canchas
  }
}

export default connect(mapStateToProps)(Canchas)