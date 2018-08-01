import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import RouterView from '../routers/routers';
export default class Boil extends Component {
  render() {
    let {child} = this.props;
    return (
      <div>
        <div>
          <NavLink to="/boil/recommend">推荐</NavLink>
          <NavLink to="/boil/trends">动态</NavLink>
        </div>
        <RouterView data={child}></RouterView>
      </div>
    )
  }
}
