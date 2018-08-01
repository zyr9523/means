import React, { Component } from 'react';
import Header from './components/Header';
import data from './routers/config';
import RouterView from './routers/routers';
import {BrowserRouter as Router,Redirect} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <Router>
            <div className="wrap">
                <Header/>
                <RouterView data={data}><Redirect to="/homepage"/></RouterView>
            </div>
        </Router>
    )
  }
}
