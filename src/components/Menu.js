import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {

  render() {
    return (    
      <View style={styles.contentContainer}>
          <View style={styles.rowContainer1} >
          </View>             
          <View style={styles.rowContainer2} >
          </View>
          <View style={styles.rowContainer3}>
            
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer:{
    flexDirection: 'column',
    flex: 1,
  },
  rowContainer1: {
    flex:1,
  },
  rowContainer2: {
    flex:1,
  },
  rowContainer3: {
    flex:1,
    flexDirection: 'row',
  },
  column1: {
    flex:1,
    flexDirection: 'column',
  },
  column2: {
    flex:1,
    flexDirection: 'column',
  },
  bottom: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor: 'gray',
    alignItems:'flex-end',
    margin: 10,
    borderRadius:5,
    opacity: 0.7,
  },
  bottomIcon: {
    width:60,
    height:60,
    alignSelf:'center',
    fontWeight:'300',
  },



  menuItem: {
    backgroundColor:'white',
    opacity: 0.7,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color:'black',
    fontSize:15,
    fontWeight:'800',
    fontFamily:'Arial',
    backgroundColor: 'transparent',
  },

});






