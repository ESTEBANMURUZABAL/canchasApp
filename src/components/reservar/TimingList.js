'use strict';
import React, { Component,PropTypes } from 'react';
import { ListView,TouchableHighlight,StyleSheet,Text,View,AlertIOS } from 'react-native';
import LoadingIndicator from './../LoadingIndicator';
import Seperator from './../Seperator';


export default class TimingList extends Component {

  renderRow(time) {
    const {selectedTime} = this.props;

    if (time.reserved) {
      return (
      <View style={[styles.cellContainerReserved]} key={time.id} >
        
          <Text style={styles.name}>
            {time.time_en} Reserved!
          </Text>
        
      </View>
    )
    };

    return (
      <View style={[styles.cellContainer, selectedTime.id ?  (selectedTime.id == time.id ? styles.activeCell : '') : '']} key={time.id} >
        <TouchableHighlight onPress={()=>this.props.onTimeSelect(time)} underlayColor='transparent'>
          <Text style={styles.name}>
            {time.time_en}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const {timings,timingsReducer} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = timings ? ds.cloneWithRows(timings) : ds.cloneWithRows([]);
    return (
      <View >
        <View style={styles.separator}/>
        {timingsReducer.isFetching ? <LoadingIndicator style={{marginTop:10}}/> : <View/>}
        <ListView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          automaticallyAdjustContentInsets={false}
          style={styles.container}
          enableEmptySections={true}
          renderFooter={()=><Seperator />}
        />
        <View style={styles.separator}/>
        
      </View>
    );
  }

}

TimingList.propTypes = {
  timings:PropTypes.object.isRequired,
  timingsReducer:PropTypes.object.isRequired,
  selectedTime:PropTypes.object.isRequired,
  onTimeSelect:PropTypes.func.isRequired
};

var styles = StyleSheet.create({
  container: {
    marginBottom:20
  },
  cellContainer:{
    flex:1,
    backgroundColor:'#e7e7e7',
    height:50,
    width:50,
    borderRadius:25,
    margin:5,
    marginTop:10,
    marginBottom:0
  },
  cellContainerReserved:{
    flex:1,
    backgroundColor:'#e7e7e7',
    height:60,
    width:60,
    borderRadius:25,
    margin:5,
    marginTop:10,
    marginBottom:0
  },
  activeCell : {
    backgroundColor:'#03A9F4',
  },
  cellWrapper: {
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-start',
    marginTop:10,
    marginBottom:10,
    alignItems:'center',
    paddingRight:5,
    paddingLeft:5
  },
  titleWrapper: {
    justifyContent:'flex-start',
    flex:2,
  },
  name: {
    color: '#FFFFFD',
    fontSize:14,
    fontWeight:'700',
    textAlign:'center',
    paddingTop:10,
  },
  separator: {
    height:1,
    backgroundColor:'#f0f5f5',
  },


});
