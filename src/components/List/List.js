import React from 'react'
import styles from './styles.module.css'
import Street from '../Street/Street'
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      activeItem: {}
    };
  }

  getList(props) {
    let list = [];
    if (props.props) {
      list = props.props.map(function(item, i) {
        return {
           street: item
        }
     });
    }
    return list;
  }
  componentWillReceiveProps(nextProps){
    if(this.props.props!==nextProps.props){
      const list = this.getList(nextProps);
      this.setState({
         list: list
      });
    }
  }
  updateState(index) {
    this.setState({
      activeItem: index
    })
  }

  render() {
    return (
      <div>
        <ul className={styles.list}>
            {this.state.list.map((item, index) => {
              return (
                <li onClick={this.updateState.bind(this, index)} className={styles.item} key={item.street.id}>
                  <img src={item.street.places.present[0].photos[0].images.large}/>
                  <div className={styles.cover}></div>
                  <div className={styles.streetName}>
                    <span>{item.street.name}</span>
                  </div>
                  <Street
                    active={this.state.activeItem === index}
                    props={item.street}
                    key={index}
                  />
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}
