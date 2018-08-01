import React, { Component } from 'react';
import '../scss/_message.css';
import {Link} from 'react-router-dom';
export default class Message extends Component {
  constructor(){
    super();
    this.state = {
      names:'上传照片',
      isOn:false
    }
  }
  render() {
    let {names,isOn} = this.state;
    let msg = JSON.parse(window.localStorage.getItem('data'));
    console.log(msg)
    return (
      <div className="message">
        <div className="msg">
          <div className="viewCont">
            {msg.number}
          </div>
          <h3>身份信息</h3>
          <input type="text" placeholder="姓名"/>
          <input type="text" placeholder="身份证号"/>
          <input type="text" placeholder="身份证地址"/>
          <input type="text" placeholder="联系电话"/>
          <a className={isOn?'on':''} onClick={this.click.bind(this)}>{names}</a>
        </div>
        <div className="btn">
            <a>提交</a>
        </div>
      </div>
    )
  }
  click(){
    this.setState({
      isOn:true
    })
    this.props.routeprops.history.push('/price')
    
  }
}
