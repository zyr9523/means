import React, { Component } from 'react';
import Minelist from '../components/mine/minelist';
import '../scss/mine/mine.css';

export default class Mine extends Component {
  constructor(){
    super();
    this.state = {
      list:['我问','关注','提现','帮助','关于']
    }
  }
  render() {
    let {list} = this.state;
    return (
      <div className="mine">
        <div className="loginpage">
          <div className="pagecont">
            <img src="./images/1.png"/>
            <h3>麦斯威尔</h3>
          </div>
          <button>申请成为专家</button>
        </div>
        <div className="minelist">
          {
            list.map((item,index)=>{
              return <Minelist key={index} item={item}/>
            })
          }
        </div>
      </div>
    )
  }
}
