import React, { Component } from 'react';
import './scss/style.css';
import store from './store';
import List from './components/List';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            list:['螺旋焊锅','热镀锌','角钢','直槽钢','工业线材','园赔','钢管制品','彩图']
        }
    }
    render() {
        let {list} = this.state;
        let {newList} = store.getState();
        return (
        <div>
            <div className="nav">
                <span>搜索条件:</span>
                <ul>
                    {
                        newList.map((val,ind)=>{
                            return <li key={ind} onClick={this.remove.bind(this,ind)}>{val}</li>
                        })
                    }
                </ul>
                <span onClick={this.removeAll.bind(this)}>清空所有条件</span>
            </div>
            <div className="list">
                品种：
                {
                    list.map((item,index)=>{
                        return <List key={index} item={item}/>
                    })
                }
            </div>
            
        </div>
        )
    }
    remove(ind){
        store.dispatch({
            type:'DEL_ELE',
            text:ind
        })
    }
    removeAll(){
        store.dispatch({
            type:'REMOVE_ALL'
        })
    }
}
