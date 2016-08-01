import React from 'react'
import styles from './styles.module.css'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15,
      lng: 19.944894,
      lat: 50.051702,
      coordinates: [],
      styles: [{"featureType": "administrative","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#444444"}]},{"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"},{"visibility": "off"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "water","elementType": "all","stylers": [{"color": "#a9e1ea"},{"visibility": "simplified"}]}]
    };
  }

  getCoordinates(props) {
    let coordinates = [];
    if (props.props) {
      coordinates = props.props.map(function(item, i) {
        return (item.path.coordinates)
     });
    }
    return coordinates;
  }
  componentWillReceiveProps(nextProps){
    if(this.props.props!==nextProps.props){
      const coordinates = this.getCoordinates(nextProps);
      this.setState({
         coordinates: coordinates
      });
    }
  }

  createMap() {
    return new google.maps.Map(document.getElementById('map'),
    {
      center: {
        lat: this.state.lat,
        lng: this.state.lng
      },
      zoom: this.state.zoom,
      styles: this.state.styles
    });
  }
  createPolyline() {
    var map = this.map;
    this.state.coordinates.map(function(i, item) {
      let position = [];
      position = i.map(function(el, index) {
        return new google.maps.LatLng(el[0], el[1]);
      });
      var polylines = new google.maps.Polyline({
        path: position,
        geodesic: true,
        strokeColor: '#222',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      })
      polylines.setMap(map);
    });

  }

  createMarker() {
    return new google.maps.Marker({
      position: {
        lat: this.state.lat,
        lng: this.state.lng
      },
      map: this.map
    })
  }

  componentDidUpdate() {
    this.map = this.createMap()
    this.marker = this.createMarker()
    this.polyline = this.createPolyline()
  }

  render() {

    return (
      <div className={styles.map}>
        <div id="map" className={styles.mapCanvas}>
        </div>
      </div>
    )
  }
}
export default Map;
