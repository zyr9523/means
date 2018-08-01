import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

export default class Router extends Component {
  render() {
    let {routeData} = this.props
    return (
      <Switch>
        {
            routeData.map((item,index)=>{
                return <Route path={item.path} key={index} render={()=>{
                    return <item.component child={item.children}></item.component>
                }}></Route>
            })
        }
        {this.props.children}
      </Switch>
    )
  }
}
