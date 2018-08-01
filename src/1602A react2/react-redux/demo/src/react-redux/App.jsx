import React, { Component } from 'react';
import './scss/style.css';
import {connect} from 'react-redux';
import List from './components/List';

class App extends Component {
    constructor(){
        super();
        this.state = {
            list:['螺旋焊锅','热镀锌','角钢','直槽钢','工业线材','园赔','钢管制品','彩图'],
            check:false
        }
    }
    render() {
        let {list,check} = this.state;
        let {newList} = this.props.checkFn;
        let {remove,removeAll} = this.props;  
        return (
        <div>
            <div className="nav">
                <span>搜索条件:</span>
                <ul>
                    {
                        newList.map((val,ind)=>{
                            return <li key={ind} onClick={()=>{remove(ind)}}>{val}</li>
                        })
                    }
                </ul>
                <span onClick={()=>removeAll()}>清空所有条件</span>
            </div>
            <div className="list">
                品种：
                {
                    list.map((item,index)=>{
                        return <List key={index} item={item} check={check}/>
                    })
                }
            </div>
            <div>
                <input type="checkbox" checked={check} onChange={(e)=>this.checks(e)}/>多选
            </div>
        </div>
        )
    }
    checks(e){
        this.setState({
            check:e.target.checked
        })
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    return {
        checkFn:state.checkFn
    }
}
const mapDispatchToprops = (dispatch)=>{
    return {
        remove:(ind)=>{
            dispatch({
                type:'DEL_ELE',
                text:ind
            })
        },
        removeAll:()=>{
            dispatch({
                type:'REMOVE_ALL'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(App)
