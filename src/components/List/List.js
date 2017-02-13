import React from 'react'
import styles from './styles.module.css'

export default class List extends React.Component {

  onClick(index) {
    this.props.setActiveItem(index);
  }

  render() {
    const list = this.props.props.data;
    return (
      <div>
        <ul className={styles.list}>
            {list.map((item, index) => {
              return (
                <li onClick={this.onClick.bind(this, index)}
                    className={styles.item}
                    key={item.id} >
                  <img src={item.places.present[0].photos[0].images.large}/>
                  <div className={styles.cover}></div>
                  <div className={styles.streetName}>
                    <span>{item.name}</span>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}
