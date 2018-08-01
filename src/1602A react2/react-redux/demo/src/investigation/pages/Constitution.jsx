import React, { Component } from 'react';
import {connect} from 'react-redux';
import  '../scss/constitution/constitusion.css';
import Food from '../components/Food';

 class Constitution extends Component {
  constructor(){
    super();
    this.state = {
      isOn:true
    }
  }
  render() {
    let {isOn} = this.state;
    let {list} = this.props;
    console.log('list...',list)
    return (
      <div className="constitution">
        <div className="introduce">
          <div>
            <p>您的体质为：</p>
            <h3>平和质  偏阴虚</h3>  
          </div>
          <span>{'>'}</span>
        </div>
        <div className="list">
          <p onClick={this.tabList.bind(this,'宜食')} className={isOn?'on':''}>宜食</p>
          <p onClick={this.tabList.bind(this,'不宜食')} className={isOn?'':'on'}>不宜食</p>
        </div>
        <div className="cont">
          <div className="scroll">
            <Food list={list}/>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.sendList();
  }
  tabList(type){
    if(type === '宜食'){
      this.setState({isOn:true})
    }else{
      this.setState({isOn:false})   
    }
    this.props.getName(type)
  }
}
const mapState = ({foodData,foodList})=>{
  console.log('foodData...',foodData,foodList)
  let arr = [...foodData];
  let list = [];

  if(arr.length){
     list = arr.filter(item=>{
      return item.names === foodList
    })[0].shouldFood;
  }
  return {
    list:list
  }
}
const mapDispatch = (dispatch)=>{
  return {
    sendList:()=>{
      fetch('./data/constitution.json').then(res=>res.json().then(body=>{
        dispatch({
          type:'FOOD_LIST',
          data:body.food
        })
      }))
    },
    getName:(text)=>{
      dispatch({
        type:'NAME',
        text
      })
    }
  }
}
export default connect(mapState,mapDispatch)(Constitution);
