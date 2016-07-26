import React from 'react'
import styles from './styles.module.css'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15,
      lng: 19.944894,
      lat: 50.051702
    };
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()

    // have to define google maps event listeners here too
    // because we can't add listeners on the map until its created
    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  createMap() {
    // let mapOptions = {
    //   center: this.mapCenter()
    // }
    return new google.maps.Map(document.getElementById('map'),
    {
      center: {
        lat: this.state.lat,
        lng: this.state.lng
      },
      zoom: this.state.zoom
    });
    // return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }


  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
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
