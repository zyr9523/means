import React, { Component } from 'react';
import '../scss/style.css';
import {
    Redirect,
    withRouter
} from 'react-router-dom';
import routers from '../routerView/config';
import RouterView from '../routerView/router';

class Index extends Component {
    constructor(){
        super();
        this.state = {
            isLogin:false
        }
    }
    render() {
        console.log(this.props)
        let name = '我的3G';
        let pathname = this.props.location.pathname;
        if(pathname === '/binling'){
            name = '绑定问问ID'
        }else if(pathname === '/selectPhone'){
            name = '选择号码与套餐'
        }else if(pathname === '/register'){
            name = '选择号码'
        }else if(pathname === '/message'){
            name = '填写信息'
        }else if(pathname === '/price'){
            name = '上传证件照片'
        }
        return (
                <div className="wrap">
                    <header><a href="##" onClick={this.backfn.bind(this)}>返回</a>{name}</header>
                    <RouterView routers={routers}><Redirect to="/login"/></RouterView>
                </div>
        ) 
    }
    backfn(){
        let pathname = this.props.location.pathname;
        pathname === '/login'?this.props.history.push('/login'):this.props.history.goBack(); 
    }
}
export default withRouter(Index);