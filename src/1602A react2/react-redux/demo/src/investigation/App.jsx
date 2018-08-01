import React, { Component } from 'react';
import './scss/style.css';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';
import routers from './router/config';
import RouterView from './router/router';
import Header from './components/Header';
console.log(routers)
export default class App extends Component {
  render() {
    return (
      <Router>
          <div className="wrap">
              <div className="nav">
                新鲜智造
              </div>
              <Header/>
              <RouterView routers={routers}><Redirect to="/Start"/></RouterView>
          </div>
      </Router>
    )
  }
}
