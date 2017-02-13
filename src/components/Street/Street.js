import React from 'react'
import styles from './styles.module.css'
export default class Street extends React.Component {

  render() {
      const streets = this.props.props.data;
      let street;

      {streets.map((item, index) => {
        if(index == this.props.props.activeItem) {
          street = item;
        }
      })}
      let placesPresent = street.places.present;


      return (
          <div className={styles.streetElement}>
              <ul>
                  {placesPresent.map((item, index) => {
                      return (
                          <li key={item.id} >
                              <img src={item.photos[0].images.large}/>
                              <div>
                                  <p>{item.details.pl.name}</p>
                              </div>
                              <div>
                                  <p>{item.details.pl.description}</p>
                              </div>
                          </li>
                      )
                  })}
              </ul>
          </div>
      )
  }
}

