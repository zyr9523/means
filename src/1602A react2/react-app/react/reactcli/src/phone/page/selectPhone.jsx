import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/_selectPhone.css';
import {
    Link
} from 'react-router-dom';
class SelectPhone extends Component {
    constructor(props,context){
        super(props);
        let data = context.router.route.location.data;
        if(data && Object.keys(data).length){
            window.localStorage.setItem('data',JSON.stringify(data));
        }else{
            data = JSON.parse(window.localStorage.getItem('data'));
        }
        this.state = {
            data,
            watchId:'',
            isMessage:false
        }
    }
    render() {
        let {data,watchId,isMessage} = this.state;
        // console.log(data)
        return (
            <div className="selectPhone">
                <div className="text">
                    <input type="text" placeholder="请输入您手表的ICCID" value={watchId} onChange={this.changeId}/>
                    <Link to="/register">
                        {data?data.number:'选择号码'}
                    </Link>
                </div>
                <div className="btn">
                    <a onClick={this.nextfn} className={isMessage?'on':''}>下一步</a>
                </div>
            </div>
        )
    }
    changeId = (e)=>{
        this.setState({
            watchId:e.target.value
        },()=>{
            let {data,watchId} = this.state;
            this.setState({
                isMessage:data&&watchId?true:false
            })
        })
    }
    nextfn = ()=>{
        let {isMessage} = this.state;
        isMessage?this.props.routeprops.history.push('/message'):null
    }
    
}
SelectPhone.contextTypes = {
    router:PropTypes.object.isRequired
}
export default SelectPhone;
//render 默认不带 history
//this.props.history.push('/index')
