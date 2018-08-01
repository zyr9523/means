import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../scss/history/history.css';
import List from '../components/List';

export default class History extends Component {
  constructor(){
    super();
    this.state = {
      isCheck:true,
      isShow:false,
      list:['心脏病','冠心病','肺癌','心脏病','心脏病','肺癌','肝癌','肺癌']
    }
  }
  render() {
    let {isCheck,isShow,list} = this.state;
    return (
      <div className="history">
        <div>
          <img src="./img/history.png" alt=""/>
          <ul>
            <li>
              <span className={isCheck?'active':''} onClick={this.check.bind(this,'nothing')}></span>
            </li>
            <li>
              <span className={isCheck?'':'active'} onClick={this.check.bind(this,'have')}></span>
              {
                isShow?<List list={list}/>:null
              }
            </li>
          </ul>
          <Link to="/Allergy"></Link>
        </div>
      </div>
    )
  }
  check(type){
    if(type==='nothing'){
      this.setState({
        isCheck:true,
        isShow:false
      })
    }else{
      this.setState({
        isCheck:false,
        isShow:true
      })
    }
  }
}
