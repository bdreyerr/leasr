import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 37.349829,
          lng: -121.938955
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDDUtqrSwrxpOBCtFaupAhwjParxJ3LSpo",
  authDomain: "leasr-scu.firebaseapp.com",
  databaseURL: "https://leasr-scu.firebaseio.com",
  projectId: "leasr-scu",
  storageBucket: "",
  messagingSenderId: "630499067439",
  appId: "1:630499067439:web:90e7c534a6bf68bd"
})(MapContainer);