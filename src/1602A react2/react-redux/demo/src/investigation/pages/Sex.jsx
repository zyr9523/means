import React, { Component } from 'react';
import '../scss/sex/sex.css';
import {Link} from 'react-router-dom';
export default class Sex extends Component {
  constructor(){
    super();
    this.state = {
      isCheck:true
    }
  }
  render() {
    let {isCheck} = this.state;
    return (
      <div className="sex">
        <div>
          <img src="./img/sex.png" alt=""/>
          <ul>
            <li  onClick={this.check.bind(this,'man')}>
              <img src="./img/man.png" />
              <span className={isCheck?'active':''}></span>
            </li>
            <li onClick={this.check.bind(this,'women')}>
              <img src="./img/women.png" />
              <span className={isCheck?'':'active'} ></span>
            </li>
          </ul>
          <Link to="/Historys"></Link>
        </div>
      </div>
    )
  }
  check(type){
    if(type==='man'){
      this.setState({
        isCheck:true
      })
    }else{
      this.setState({
        isCheck:false
      })
    }
  }
}
