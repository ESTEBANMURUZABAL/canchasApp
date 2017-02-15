'use strict';
import React, { Component,PropTypes } from 'react';
import { ListView,TouchableHighlight,StyleSheet,Text,View,AlertIOS, Image } from 'react-native';
import LoadingIndicator from './../LoadingIndicator';
import Seperator from './../Seperator';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchCancha from './SearchCancha';

export default class CanchasList extends Component {

  constructor() {
    super();

    this.state= {
      searchString : ''
    };

    this.search = this.search.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  renderRow(cancha) {
    return (
      <View style={styles.cellWrapper} key={cancha.id}>
        
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={styles.thumbnail} source={{uri:cancha.image}}/>
            <View style={{flexDirection:'column',marginLeft:10,justifyContent:'center',alignItems:'center'}} >
              <Text style={styles.name} numberOfLines={5}> {cancha.name}</Text>
              <View style={{flexDirection:'row',marginTop:5}}>
                <Icon
                  name='ios-pin'
                  size={20}
                  color={'#99ddff'}
                  style={styles.followIcon}
                />
                <Text style={styles.city}>{cancha.location}</Text>
              </View>
            </View>
          </View>

      </View>
    )
  }

  search() {
    //this.props.dispatch(searchCompany(this.state.searchString));
  }

  updateSearchString(value) {
    this.setState({
      searchString:value
    });
  }

  render() {
    const {canchas, canchasReducer} = this.props;

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    let dataSource = ds.cloneWithRows(canchas) ;

    return (
      <View >
        <SearchCancha search={this.search} 
        searchString={this.state.searchString} 
        updateSearchString={this.updateSearchString} />

        {canchasReducer.isFetching ? <LoadingIndicator style={{marginTop:10}}/> : <View/>}
       
        <ListView
        contentContainerStyle={styles.contentContainer}
        dataSource={dataSource}
        renderRow={this.renderRow.bind(this)}
        enableEmptySections={true} //@todo remove this in future version
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        ref='listView'
        />
        
      </View>
    );
  }

}

CanchasList.propTypes = {
 canchas : PropTypes.object.isRequired,
 canchasReducer : PropTypes.object.isRequired
};

var styles = StyleSheet.create({
  contentContainer:{
    paddingVertical:10,
    paddingHorizontal:5
  },  
    separator: {
    height:1,
    backgroundColor:'#f0f5f5',
  },
  cellWrapper: {
    marginBottom: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: 'white',
    opacity: 0.7,
    shadowColor: "blue",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  name: {
    color: 'turquoise',
    textAlign:'left',
    fontWeight:'700',
    fontSize:16

  },
  description: {
    color: 'black',
    fontSize: 15,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  city:{
    color:'gray',
    alignSelf:'center'
  },
  followIcon: {
    height:20,
    width:20
  },
  heartIcon:{
    height:30,
    width:30,
  }

});



