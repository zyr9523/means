import React, { Component } from 'react';
import CountDown from './power/CountDown';
class Binling extends Component {
    constructor(){
        super();
        this.state = {
            timesDate:new Date(),
            phone:'',
            imgCode:'',
            validateCode:'',
            isBinling:false
        }
    }
    render() {
        let {timesDate,phone,imgCode,validateCode,isBinling} = this.state;
        return (
            <div className="binling">
                <div className="text">
                    <input type="text" placeholder="Ticwear助手登陆手机号码" value={phone} name="phone" onChange={this.bilingfn}/>
                    <div>
                        <input type="text" placeholder="图片验证码" value={imgCode} name="imgCode" onChange={this.bilingfn}/>
                        <img src={`http://dsp.renren.com/dsp/getCode.htm?random=${timesDate}`} onClick={this.changeCode.bind(this)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="验证码" value={validateCode} name="validateCode" onChange={this.bilingfn}/>
                        <CountDown/>
                    </div>
                </div>
                <div className="btn">
                    <a href="##" className={isBinling?'on':''} onClick={this.nextfn.bind(this)}>绑定</a>
                </div>
            </div>
        )
    }
    changeCode(){
        this.setState({
            timesDate:new Date()
        })
    }
    bilingfn = (e)=>{
        let reg = /^1[345867]\d{9}$/;
        this.setState({
            [e.target.name]:e.target.value
        },()=>{
            this.setState({
                isBinling:(reg.test(this.state.phone)&&this.state.imgCode&&this.state.validateCode)?true:false
            })
        })
    }
    nextfn(){
        if(this.state.isBinling){
            this.props.routeprops.history.push('/selectPhone');
        }
    }
}
export default Binling;
