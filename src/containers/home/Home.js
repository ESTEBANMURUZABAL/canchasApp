import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Menu from './../../components/Menu';

export default class Home extends Component {

  render() {
    return (
       <Image style={styles.backgroundImage}
             source={require('./../../assets/img/bghome.jpg')}>
        <Menu />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 64,
    backgroundColor:'white',
  }

});

