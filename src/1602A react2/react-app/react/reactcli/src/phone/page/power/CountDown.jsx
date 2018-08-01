import React, { Component } from 'react'

export default class CountDown extends Component {
    constructor(){
        super();
        this.state = {
            tit:'获取验证码',
            isActive:false
        }
    }
    render() {
        let {tit,isActive} = this.state;
        return (
            <span onClick={this.getCode.bind(this)} className={isActive?'active':''}>{tit}</span>
        )
    }
    getCode(){
        let count = 60;
        this.timer = setInterval(()=>{
            this.setState({isActive:true});
            count--;
            this.setState({tit:count+'s后重发'});
            if(count <= 0){
                this.setState({tit:'获取验证码',isActive:false});
                clearInterval(this.timer);
            }
        },1000)
    }
    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }
}
