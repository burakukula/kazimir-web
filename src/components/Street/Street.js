import React from 'react'
import styles from './styles.module.css'
export default class Street extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var street = this.props.props;
    if(this.props.active) {
      var activeView = street;
      console.log(activeView);
    }


    return (
      <div className={styles.streetElement} onClick = {this.props.updateStateProp}>
      </div>
    )
  }
}
export default Street;
