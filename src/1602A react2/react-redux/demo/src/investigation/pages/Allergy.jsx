import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../scss/history/history.css';
import List from '../components/List';

export default class Allergy extends Component {
  constructor(){
    super();
    this.state = {
      isCheck:true,
      isShow:false,
      list:['羊肉','海鲜','芹菜','胡萝卜','芹菜','芹菜','羊肉']
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
          <Link to="/Dislike"></Link>
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
