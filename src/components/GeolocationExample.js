import React, { Component } from 'react';
import { View, Text, Vibration } from 'react-native';
import Button from './Button';

class GeolocationExample extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed:false,
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          debugger;
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  }

  showText(){
      if(this.state.buttonPressed){
        this.setState({buttonPressed:false});
      }
      else{
        Vibration.vibrate(1000);
        this.setState({buttonPressed:true});
      }
    
  }

  render() {

        return (
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => this.showText() }>
          Abrir Geolocalizacao
        </Button>
        {this.state.buttonPressed && <Text>Latitude: {this.state.latitude}</Text> }
        {this.state.buttonPressed && <Text>Longitude: {this.state.longitude}</Text>}    
            {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        
        </View>
        );
      
  }
}

export default GeolocationExample;