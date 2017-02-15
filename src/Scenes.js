'use strict';
import React, { Component } from 'react';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import Home from './containers/home/Home';
import Map from './containers/maps/Map';
import Canchas from './containers/canchas/Canchas';
import Confirmation from './containers/reservations/Confirmation';
import Appointment from './containers/reservations/Appointment';
import TabIcon from './components/TabIcon';

export const scenes = Actions.create(

<Scene key="modal" component={Modal} >
  <Scene key="root">
	<Scene key="home" tabs={true} 
	    tabBarStyle={{ backgroundColor:'#03A9F4' ,height:40}}
	    tabBarSelectedItemStyle={{backgroundColor:'#03A9F4',height:40}}
	    
	>
      <Scene key="inicio" component={Home} 
      	icon={TabIcon} 
        selectedTabIcon="ios-home"
        tabIcon="ios-home-outline"
        navigationBarStyle={{ backgroundColor:'#03A9F4' }}
        titleStyle={{ color:'white' }}
      	initial={true} title="Inicio"/> 

	   <Scene key="reserveScreen"
	    icon={TabIcon} 
	    selectedTabIcon="ios-search"
	    tabIcon="ios-search-outline"
	    navigationBarStyle={{ backgroundColor:'#03A9F4' }}
	    titleStyle={{ color:'white' }}
	   >
	    <Scene key="appointment" component={Appointment} title="Appointment" initial={true} hideNavBar={false} type="reset"/>
	    <Scene key="confirmation" component={Confirmation} title="Confirmation"/>

	  </Scene>	

	    <Scene key="maps" component={Map} icon={TabIcon}
	     title="Map"
	     selectedTabIcon="ios-map" tabIcon="ios-map-outline"
	     navigationBarStyle={{ backgroundColor:'#03A9F4' }}
	     titleStyle={{ color:'white' }}
		/>

		<Scene key="config" component={Canchas} icon={TabIcon} 
			 title="Canchas"
		     selectedTabIcon="ios-star" tabIcon="ios-star-outline"
		     navigationBarStyle={{ backgroundColor:'#03A9F4' }}
		     titleStyle={{ color:'white' }}
		/>

		<Scene key="reservations" component={Canchas}  icon={TabIcon} 
			 title="My reservations"
		     selectedTabIcon="ios-alarm" tabIcon="ios-alarm-outline"
		     navigationBarStyle={{ backgroundColor:'#03A9F4' }}
		     titleStyle={{ color:'white' }}
		/>


       
	</Scene> 
  </Scene>
</Scene>  
);


