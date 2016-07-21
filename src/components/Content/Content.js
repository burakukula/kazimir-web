import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import List from '../List/List'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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


  render() {
    return (
      <div>
        <List props={this.state.data}/>
      </div>
    )
  }
}
