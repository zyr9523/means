import React, { Component } from 'react';
import {connect} from 'react-redux';

class Input extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            isusername:false,
            ispassword:false
        }
        this.username = /^1[3|4|5|8|7][0-9]\d{8}$/;
        this.password = /^\d{4,6}$/;
    }
    render() {
        let {username,password,isusername,ispassword} = this.state;
        return (
        <div className="text">
            <input type="text" value={username} name="username" placeholder="11位手机号" onChange={this.change.bind(this)} className={isusername?'success':''}/><br/>
            <input type="password" value={password} name="password" placeholder="4-6位数字密码" onChange={this.change.bind(this)} className={ispassword?'success':''}/><br/>
            <button onClick={this.add.bind(this)}>add</button>
        </div>
        )
    }
    change(e){
        this.setState({
            [e.target.name]:e.target.value,
            ['is'+e.target.name]:this[e.target.name].test(e.target.value)
        });
    }
    add(){
        let {username,password} = this.state;
        if(this.username.test(username) && this.password.test(password)){
            this.props.addValue({username,password})
            this.props.history.push('/list');
        }
    }
}

const mapDispatch = (dispatch)=>{
    return {
        addValue(obj){
            dispatch({
                type:'ADD_VALUE',
                text:obj
            })
        }
    }
}
export default connect(null,mapDispatch)(Input);
