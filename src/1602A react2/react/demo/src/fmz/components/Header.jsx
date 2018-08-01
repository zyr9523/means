import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Header extends Component {
    render() {
        let names = '专家';
        let pathname = this.props.location.pathname;
        if(pathname === '/Database/Recommend'){
            names = '资料库'
        }else if(pathname === '/ExpertsRec'){
            names = '专家推荐'
        }else if(pathname === '/Mine'){
            names = '我的'
        }
        return (
            <header>
                <a href="##" onClick={this.back.bind(this)}>返回</a>
                <h3>{names}</h3>
                <a href="##">. . .</a>
            </header>
        )
    }
    back(){
        this.props.history.goBack();
    }
}
export default withRouter(Header);
