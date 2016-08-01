import React from 'react'
import styles from './styles.module.css'
export default class Street extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var street = this.props.props;
    console.log(this.props);
    return (
      <div className={styles.streetElement} onClick = {this.props.updateStateProp}>
      </div>
    )
  }
}
export default Street;
