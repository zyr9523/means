import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
export default class Routers extends Component {
  render() {
      let {data} = this.props;
      // console.log(data)
    return (
      <Switch>
        {
            data.map((item,index)=>{
                return <Route key={index} path={item.path} render={()=>{
                    return <item.component child={item.children}></item.component>
                }}></Route>
            })
        }
        {this.props.children}
      </Switch>
    )
  }
}
