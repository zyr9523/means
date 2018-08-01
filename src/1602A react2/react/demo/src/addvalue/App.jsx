import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';
import './scss/style.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
        <Router>
            <div className="wrap">
                <Switch>
                    <Route path="/index" component={Input}></Route>
                    <Route path="/list" component={List}></Route>
                    <Redirect to="/index"/>
                </Switch>
            </div>
        </Router>
        )
    }
}
