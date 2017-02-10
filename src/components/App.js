import React, { Component } from 'react';
import logo from './../assets/images/react-boilerplate-logo.svg';
import styles from './../assets/styles/App.scss'
import { Router, Route, browserHistory, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="React Boilerplate" />
          <h2>Welcome to React Boilerplate</h2>
        </div>

        <div className={styles.buttonContainer}>
          <Link to="dashboard" className={styles.button}>Go to the dashboard</Link>
        </div>
      </div>
    );
  }
}

export default App;
