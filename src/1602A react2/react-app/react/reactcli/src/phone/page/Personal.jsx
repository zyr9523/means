import React, { Component } from 'react';
import '../scss/_personal.css'
import {NavLink,Redirect} from 'react-router-dom';
import RouterView from '../routerView/router';

export default class Personal extends Component {
  render() {
    let {child} = this.props;
    return (
      <div className="personal"> 
        <div className="header">
          <h3>账户余额：152.00元</h3>
          <div className="list">
            <NavLink to="/personal/number" activeClassName="active">用量查询</NavLink>
            <NavLink to="/personal/recharge" activeClassName="active">话费充值</NavLink>
            <NavLink to="/personal/sameMouth" activeClassName="active">当月话费</NavLink>
            <NavLink to="/personal/core" activeClassName="active">个人中心</NavLink>
          </div>
          <RouterView routers={child}><Redirect to="/personal/number"/></RouterView>
        </div>
      </div>
    )
  }
}

