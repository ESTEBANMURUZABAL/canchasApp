'use strict';
import React, { Component, PropTypes } from 'react';
import { StyleSheet,View,Text,Dimensions,TouchableOpacity,TouchableHighlight } from 'react-native';


export default class CanchasMapsMarker extends Component {

  static propTypes = {
    region:PropTypes.object.isRequired,
    onRegionChange:PropTypes.func.isRequired,
    followLocation:PropTypes.func.isRequired,
  };

  render() {
    const {canchas,followLocation,region} = this.props;
    
    return (
<View />
    );
  }
}

var styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'green'
  },
  getDirectionText:{
    textDecorationLine:'underline',
    paddingTop:20,
    fontSize:9,
  },
  companyName : {
    fontSize:9,
    padding:5,
    color:'black',
    fontWeight:'400'
  }
});
