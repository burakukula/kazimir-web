import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import List from '../List/List'
import Map from '../Map/Map'
import Header from '../Header/Header'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        activeItem: ''
    };
  }

  loadFromServer() {
    $.ajax({
      url: this.props.source,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data
        })
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadFromServer();
  }

  setActiveItem(item) {
    this.setState({
        activeItem: item
    });
  }

  render() {
    return (
      <div>
        <Header />
        <List setActiveItem={this.setActiveItem.bind(this)}
              props={this.state.data} />
        <Map props={this.state} />
      </div>
    )
  }
}
