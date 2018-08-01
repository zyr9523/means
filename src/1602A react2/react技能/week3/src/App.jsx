import React, { Component } from 'react';
import './scss/style.css';
import {connect} from 'react-redux';
import SelectNav from './components/SelectNav';
import List from './components/List';
import data from './mock';
console.log('data...',data);

class App extends Component {
    render() {
        let {navList,selectList,news} = this.props;
        return (
        <div className="wrap">
            <SelectNav selectList={selectList}/>
            <List navList={navList} news={news}/>
        </div>
        )
    }
    componentDidMount(){
        this.props.getList()
    }
}
const mapState = ({getList,getNames})=>{
    console.log('getList..',getList);
    let navList = [];
    let selectList = [];
    if(getList){
        navList = getList.navList;
        selectList = getList.selectList
    }
    let arr = [];
    let news = [];
    if(getList.list){
        arr = getList.list;
        if(arr.length){
            news = arr.filter(item=>{
                return item.type === getNames
            })[0].listView
        }
    }
    return {
        selectList,
        navList,
        news
    }
}
const mapDispatch = (dispatch)=>{
    return {
        getList(){
            fetch('./data/data.json').then(res=>{res.json().then(body=>{
                dispatch({
                    type:'GET_LIST',
                    data:body
                })
            })});
        }
    }
}
export default connect(mapState,mapDispatch)(App);
