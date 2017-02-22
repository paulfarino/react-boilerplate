import React, { Component } from 'react';
import logo from './../assets/images/react-boilerplate-logo.svg';
import styles from './../assets/styles/App.scss'
import { Link } from 'react-router'

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="React Boilerplate" />
          <h2>I'm the dashboard page</h2>
        </div>
        <div className={styles.buttonContainer}>
          <Link to={this.props} className={styles.button}>Back</Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
