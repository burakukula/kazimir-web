import React from 'react'
import styles from './styles.module.css'

const List = ({props}) => {
  return (
    <div>
      <h3>Streets List</h3>
      <ul className={styles.list}>
        {props.map((item, index) => {
          return (
            <li className={styles.item} key={item.id}>
              <img src={item.places.present[0].photos[0].images.large}/>
              <p>{item.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default List;
