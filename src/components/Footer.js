import React, { Component } from 'react';
import styles from './../assets/styles/App.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        <p>&copy; React Boilerplate</p>
        <i className={`material-icons ${styles.stars}`}>stars</i>
      </div>
    );
  }
}

export default Footer;
