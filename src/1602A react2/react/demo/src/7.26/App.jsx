import React, { Component } from 'react';
import Nav from './components/Nav';
import List from './components/List';
import data from './mock';
import './scss/style.css';
import {connect} from 'react-redux';
console.log(data)
class App extends Component {
  render() {
      let {list} = this.props;
      console.log(list)
    return (
      <div className="wrap">
        <div className="nav">
            <Nav/>
        </div>
        <List data={list}/>
      </div>
    )
  }
}
const mapState = ({gettype})=>{
    console.log(gettype)
    let arr = data.list;
    if(data.list.length){
        arr = arr.filter(item=>{
            return item.type === gettype
        })
    }
    console.log(arr)
    return {
        list:arr
    }
}
export default connect(mapState)(App)