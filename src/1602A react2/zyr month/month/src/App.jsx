import React, { Component } from 'react';
import './scss/style.css';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Detail from './components/Detail';
import Indexs from './components/Index';

class App extends Component {
    render() {
        return (
        <div className="wrap">
            <header>
                <a href="##" onClick={this.back.bind(this)}>{'<'}</a>
                <h3>我的提问</h3>
                <a href="##">...</a>
            </header>
            <Switch>
                <Route path="/index" render={(match)=>{
                    return <Indexs match={match}/>
                }}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Redirect to="/index"/>
            </Switch>
        </div>
        )
    }
    back(){
        this.props.history.goBack();
    }
}
export default withRouter(App);
