import React, {Component} from 'react';
import config from './config.json';
import styles from './css/Greeter.css';//导入

export default class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}
