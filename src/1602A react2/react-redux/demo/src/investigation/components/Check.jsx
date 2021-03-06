import React, { Component } from 'react';

export default class List extends Component {
  constructor(){
    super();
    this.state = {
        count:-1,
        arr:[]
    }
  }
  render() {
    let {list} = this.props;
    let {arr,count} = this.state;
    return (
      <div>
        {
          list.map((item,index)=>{
            return <i key={index} onClick={this.clickItem.bind(this,index)} className={count===index?'on':''}>{item}</i>   
          })
        }
      </div>
    )
  }
  clickItem(index){
    let {arr} = this.state;
    let id = arr.indexOf(index);
    if(id === -1){
      arr.push(index)
    }else{
      arr.splice(id,1);
    }
    console.log('arr...',arr);

    this.setState({
      arr,
      count:index
    })
  }
}
