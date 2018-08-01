import React, { Component } from 'react';
import {NavLink,Redirect} from 'react-router-dom';
import RouterView from '../router/router';
import '../scss/database/database.css';
import {connect} from 'react-redux';

 class Database extends Component {
  render() {
    let {child} = this.props;
    return (
      <div className="database">
        <div className="navlist">
          <NavLink to="/Database/Recommend" activeClassName="active">精品推荐</NavLink>
          <NavLink to="/Database/Financial">财经视频</NavLink>
          <NavLink to="/Database/HotText">专家热文</NavLink>
          <NavLink to="/Database/Report">数据研报</NavLink>
        </div>
        
        <RouterView routeData={child}><Redirect to="/Database/Recommend"/></RouterView>
      </div>
    )
  }
  
}
export default Database;
//basic