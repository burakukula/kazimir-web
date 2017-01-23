import React from 'react'
import styles from './styles.module.css'
export default class Street extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var street = this.props.props;
    // if(this.props.active) {
    //   var activeView = street;
    // }


    return (
      <div className={styles.streetElement}>
      </div>
    )
  }
}

