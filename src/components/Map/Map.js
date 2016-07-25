import React from 'react'
import styles from './styles.module.css'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
const Map = ({props}) => {
  console.log(props)
  return (
    <div className={styles.map}>
      aloha from map
    </div>
  )
}
export default Map;
