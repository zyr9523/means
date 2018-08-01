import React, { Component } from 'react'
import '../scss/start/start.css';
import {Link} from 'react-router-dom';
export default class Start extends Component {
  render() {
    return (
      <div className="start">
        <div>
          <img src="./img/1.jpg"/>
          <Link to="/Sex"></Link>
        </div>
      </div>
    )
  }
}
