import React, { PropTypes, Component } from 'react';
import { StyleSheet,View,Text,Dimensions,TouchableOpacity,Linking, ActionSheetIOS } from 'react-native';
import { connect } from 'react-redux';
import { fetchCanchas } from './../../actions/canchas';
import CanchasMapsMarker from './../../components/maps/CanchasMapsMarker';


class Map extends  Component {

  constructor(props) {

    super(props);

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE = -27.460644;
    const LONGITUDE = -59.0653855;
    const LATITUDE_DELTA = 0.4;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };

    this.onRegionChange = this.onRegionChange.bind(this);
    this.openMaps = this.openMaps.bind(this);
    this.followLocation = this.followLocation.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCanchas());
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  followLocation(cancha) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: `${cancha.name} - ${cancha.location}`,
        options: ['Open in Apple Maps', 'Open in Google Maps', 'Cancel'],
        destructiveButtonIndex: -1,
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        this.openMaps(cancha,buttonIndex);
      }
    );

  }

  openMaps(cancha,buttonIndex) {
    var address = encodeURIComponent(cancha.location);
    switch (buttonIndex) {
      case 0:
        Linking.openURL('http://maps.apple.com/?q=' + address);
        break;
      case 1:
        // var nativeGoogleUrl = 'comgooglemaps://?q=' +
        //   address + '&x-success=f8://&x-source=F8';
        var nativeGoogleUrl = `comgooglemaps://?daddr=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&center=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&zoom=14&views=traffic&directionsmode=driving`;
        Linking.canOpenURL(nativeGoogleUrl).then((supported) => {
          var url = supported ? nativeGoogleUrl : 'http://maps.google.com/?q=' + address;
          Linking.openURL(url);
        });
        break;
    }

  }

// followLocation(company) {
//   let url = `comgooglemaps://?center=${parseFloat(company.latitude)},${parseFloat(company.longitude)}&zoom=14&views=traffic`;
//   Linking.canOpenURL(url).then(supported => {
//     if (supported) {
//       Linking.openURL(url);
//     } else {console.log('Don\'t know how to open URI: ' + url);}
//   });
// }

  render() {
    const { canchas } = this.props;
    return (
<View />
    );
  }
}

function mapStateToProps(state) {
  return {
    canchas: state.entities.canchas ? state.entities.canchas : []
  }
}

export default connect(mapStateToProps)(Map);
