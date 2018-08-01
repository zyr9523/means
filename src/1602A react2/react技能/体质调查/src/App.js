import React, { Component } from 'react';
import addAction from './store/addAction';//action
import './style/app.css';
import Item from './components/Item';
import {connect} from 'react-redux';
import { combineReducers } from 'redux';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      val:'',
      checkall:false,
      didNum:0
    }
  }
  render() {
    let {val,checkall,todoNum,didNum}=this.state;
    let {fnChange,fnChechall,fnKey,fnRemoveSelect}=this;
    let {list}=this.props;
    return (
      <div className="app">
        <header className="header">
          <h4 className="title">ToDoList</h4>
          <input type="text" value={val}  onKeyDown={fnKey} onChange={fnChange} placeholder='请输入...'/>
        </header>
        <div className="select-all">
          <input type="checkbox" value={checkall} onChange={fnChechall}/>全选
          <button className="remove" onClick={fnRemoveSelect}>批量删除</button>
        </div>
        <div className="list">
         <div className="todo">
          <h4 className="title"><span>正在进行</span><span>{list.length}</span></h4>
          <ul className="todolist">
              {
                list.map((item,index)=>{
                  return <Item  key={index} {...item}/>
                })
              }
            </ul>
          </div>
          <div className="did">
            <h4 className="title"><span>正在进行</span><span>{didNum}</span></h4>
            <ul className="didlist">
            </ul>
          </div>
        </div>  
      </div>
    );
  }
  fnChange=(e)=>{
    //输入框可控组件
    this.setState({
      val:e.target.value
    })
  }
  fnChechall=(e)=>{
    //全选，数据对就是没有更新view
    let checkall=e.target.checked;
    this.setState({
      checkall
    })
    this.props.checkall(addAction(checkall,5));
  }
  fnKey=(e)=>{
    //添加数据
    let val=e.target.value;
    if(e.keyCode==13&&val){
      let ischeck=this.state.checkall;
      this.props.addItem(addAction({text:val,ischeck},1));
      this.setState({
        val:''
      })
    }
  }
  fnRemoveSelect=()=>{
    //删除选中项
    this.props.removeSelect();
  }
}

let mapStateToProps=state=>{
  return {
    list:state.list
  }
}

let mapDispatchToProps=dispatch=>{
  return{
    removeSelect(){
      dispatch(addAction('removeSelect',4))
    },
    addItem(obj){
      dispatch(obj)
    },
    checkall(obj){
      dispatch(obj)
    }
  }
}

let hoc=connect(mapStateToProps,mapDispatchToProps)

export default hoc(App);
