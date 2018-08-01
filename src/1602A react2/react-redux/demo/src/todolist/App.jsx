import React, { Component } from 'react';
import './scss/style.css';
import {connect} from 'react-redux';
import Input from './components/Input';
import List from './components/List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      all:false
    }
  }
  render() {
    let {all} = this.state;
    let {val,deleAll,filterFn} = this.props;
    console.log('this.props...',this.props)
    return (
      <div className="wrap">
          <h3>ToDoList</h3>
          <Input/>
          <div className="remove">
            <p>
              <input type="checkbox" checked={all} onChange={this.allCheck}/>全选
            </p>
            <span onClick={()=>deleAll()}>批量删除</span>
          </div>
          <div className="list">
              {
                  val.map((item,index)=>{
                      return <List item={item} key={index} id={index}/>
                  })
              }
          </div>
          <div>
            <button onClick={()=>filterFn('all')}>全部</button>
            <button onClick={()=>filterFn('done')}>已完成</button>
            <button onClick={()=>filterFn('pending')}>未完成</button>
          </div>
      </div>
    )
  }
  allCheck=(e)=>{
    this.setState({
      all:e.target.checked
    });
    this.props.selectAll(e.target.checked)
   
  }
}
const mapState = ({valuefn,cat})=>{
  console.log('cat...',cat)
  let tmp = valuefn;
  if(cat === 'all'){
    tmp = valuefn.list
    console.log('tmp...',tmp)
  }else if(cat === 'done'){
    tmp = valuefn.list.filter(item=>{
      return item.isFinished
    });
  }else if(cat === 'pending'){
    tmp = valuefn.list.filter(item=>{
      return !item.isFinished
    });
  }
  return {
    val:tmp
  }
}
const mapDispatch = (dispatch)=>{
  return {
    selectAll(all){
      dispatch({
        type:'SELECT_ALL',
        all
      })
    },
    deleAll(){
      dispatch({
        type:'DELE_ALL'
      })
    },
    filterFn(status){
      dispatch({
        type:'FILTER_ITEM',
        status
      })
    }
  }
}
export default connect(mapState,mapDispatch)(App);
