import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Contacto extends Component {

  render() {
    return (
      <View >
        <Text style={styles.text}>Contacto</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent:'center',
    marginTop: 40,
    backgroundColor: 'black',
  },
  rowContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',

  },
  menuItem: {
     width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'white',
    opacity: 0.7,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center'

  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color:'black',
    fontSize:20,
    fontWeight:'800',
    fontFamily:'Arial',
    backgroundColor: 'transparent',
  },

});
