import React from 'react'
import {Link} from 'react-router'
import List from '../List/List'
import Map from '../Map/Map'
import Street from '../Street/Street'
import Header from '../Header/Header'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        activeItem: '',
        active: false
    };
  }

  loadFromServer() {
      const url = this.props.source;
      fetch(url)
          .then( (response) => {
              return response.json() })
          .then( (json) => {
              this.setState({data: json});
          });
  }

  componentDidMount() {
    this.loadFromServer();
  }

  setActiveItem(item, prevState) {
    this.setState({
        activeItem: item,
        active: true
    });
  }

  render() {
    let content = '';
    if(this.state.active == true) {
        content = <Street props={this.state}/>;
    } else {
      content = <List setActiveItem={this.setActiveItem.bind(this)}
            props={this.state}/>;
    }
      return (
          <div>
              <Header />
              {content}
              <Map props={this.state}/>
          </div>
      )
  }
}
