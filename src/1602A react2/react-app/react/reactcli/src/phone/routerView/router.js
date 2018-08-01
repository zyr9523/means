import React, { Component } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom';

export default class RouterView extends Component {
  render() {
    let {routers} = this.props;
    // console.log(routers)
    return (
      <Switch>
        {
            routers.map((item,index)=>{
                return <Route key={index} path={item.path} render={(routeprops)=>{
                  return <item.component child={item.children} routeprops={routeprops}></item.component>
                }}></Route>
            })
        }
        {this.props.children}
      </Switch>
    )
  }
}
