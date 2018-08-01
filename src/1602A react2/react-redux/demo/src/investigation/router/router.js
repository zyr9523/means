import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
export default class RouterView extends Component {
  render() {
      let {routers} = this.props;
    return (
      <Switch>
        {
            routers.map((item,index)=>{
                return <Route key={index} path={item.path} component={item.component}></Route>
            })  
        }
        {this.props.children}
      </Switch>
    )
  }
}
