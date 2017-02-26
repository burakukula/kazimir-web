import React from 'react';
import styles from './app.css';
import Content from './components/Content/Content'

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <Content source="https://kazimirapp.pl/streets.json"/>
      </div>
    );
  }
}
