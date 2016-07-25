import React from 'react'
import styles from './styles.module.css'
const Street = ({props}) => {
  return (
    <div onClick={props.onClick} className={styles.streetName}>
      <span>{props.name}</span>
    </div>
  )
}
export default Street;
