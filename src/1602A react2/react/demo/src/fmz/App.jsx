import React, { Component } from 'react';
import './scss/style.css';
import {BrowserRouter as Router,Redirect,NavLink} from 'react-router-dom';
import routeData from './router/config';
import RouterView from './router/router';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrap">
          <Header/>
          <section>
            <div className="scroll">
              <RouterView routeData={routeData}><Redirect to="/Expert"/></RouterView>
            </div>
          </section>
          <footer>
            <NavLink to="/Expert" activeClassName="active">找专家</NavLink>
            <NavLink to="/Question">看问题</NavLink>
            <NavLink to="/Database">资料库</NavLink>
            <NavLink to="/Mine">我的</NavLink>
          </footer>
        </div>
      </Router>
    )
  }
}
export default App;
