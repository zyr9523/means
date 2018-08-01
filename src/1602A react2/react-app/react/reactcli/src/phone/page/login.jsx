import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import CountDown from './power/CountDown';
class Login extends Component {
    constructor(){
        super();
        this.state = {
            isLogin:false,
            IDnum:'',
            validate:''
        }
    }
    render() {
        let {isLogin,IDnum,validate} = this.state;
        return (
            <div className="login">
                <div className="text">
                    <input type="text" placeholder="入网证件号码" value={IDnum} onChange={(e)=>{
                        this.getValue(e)
                    }} name="IDnum"/>
                    <div>
                        <input type="text" placeholder="验证码" value={validate}onChange={(e)=>{
                            this.getValue(e)
                        }} name="validate"/>
                        <CountDown/>
                    </div>
                </div>
                <div className="btn">
                    <a className={isLogin?'on':''} onClick={this.loading.bind(this)}>登录</a>
                    <Link to="/binling">没有账号，我要开卡</Link>
                </div>
            </div>
        )
    }
    getValue(e){
        let reg = /^1[345786]\d{9}$/;
        this.setState({
            [e.target.name]:e.target.value
        },()=>{
            this.setState({
                isLogin:(reg.test(this.state.IDnum) && this.state.validate)?true:false
            })
        })
    }
    loading(){
        if(this.state.isLogin){
            this.props.routeprops.history.push('/personal');
        }else{
            return 
        }
    }
}
export default Login;
