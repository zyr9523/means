import React, { Component } from 'react';
import '../scss/dislike/dislike.css';

export default class Dislike extends Component {
  constructor(){
    super();
    this.state = {
      list:['羊肉','西瓜','海鲜','洋葱','芹菜','芹菜','胡萝卜','胡萝卜','韭菜','香菜'],
      arr:[],
      isMark:false
    }
  }
  render() {
    let {list,arr,isMark} = this.state;
    return (
      <div className="dislike">
        <div>
          <img src="./img/history.png"/>
          <ul>
            {
              list.map((item,index)=>{
                return <li key={index} onClick={this.check.bind(this,index)}>
                    <span className={arr.indexOf(index)!==-1?'active':''} ></span>
                    <i>{item}</i>
                  </li>
              })
            }
          </ul>
          <a onClick={this.mark.bind(this)}></a>
          {isMark?<div className="mark">
            <img src="./img/alert.png" onClick={this.close.bind(this)}/>
          </div>:null}
        </div>
      </div>
    )
  }
  check(index){
    let {arr} = this.state;
    let id = arr.indexOf(index);
    if(id === -1){
      arr.push(index)
    }else{
      arr.splice(id,1);
    }
    this.setState({
      arr
    })
  }
  mark(){
    this.setState({
      isMark:true
    })
  }
  close(){
    this.props.history.push('/Fell')
  }
}
