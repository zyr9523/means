import React, { Component } from 'react';
import './scss/style.css';
import Header from './components/Header';
import ContList from './components/ContList';
import Detail from './components/Detail';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
class App extends Component {
  render() {
      let names = '酒水饮料';
      let pathname = this.props.location.pathname;
      if(pathname === '/detail'){
        names = '商品详情'
      }
    return (
        <div className="wrap">
            <Header route={this.props} names={names}/>
            <Switch>
                <Route path="/index" component={ContList}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Redirect to="/index"/>
            </Switch>
        </div>
    )
  }
}
export default withRouter(App)
