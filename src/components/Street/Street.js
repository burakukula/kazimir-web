import React from 'react'
import styles from './styles.module.css'
export default class Street extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className={styles.streetElement}>
      </div>
    )
  }
}

