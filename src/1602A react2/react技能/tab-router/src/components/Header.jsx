import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="list">
            <NavLink to="/homepage">首页</NavLink>
            <NavLink to="/boil">沸点</NavLink>
            <NavLink to="/brochure">小册</NavLink>
            <NavLink to="/activity">活动</NavLink>
        </div>
      </div>
    )
  }
}
