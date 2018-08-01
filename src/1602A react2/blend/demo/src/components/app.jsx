import React, { Component } from 'react';
import {connect} from 'react-redux';
import data from '../../mock/data.js';
import List from './List';

class App extends Component {
    constructor(props){
        super(props);
        console.log(this.props.checkAlls)
        this.state = {
            allNum:0
        }
    }
    render() {
        let {list,checkAlls,sum} = this.props;
        let {allNum} = this.state;
        return (
        <div className="wrap">
            {
                list&&list.map(item=>{
                    return <List key={item.id} item={item}/>
                })
            }
            <div className="compute">
                <p>
                    全选：
                    <input type="checkbox" checked={checkAlls} onChange={this.changeall.bind(this)}/>
                </p>
                <p>
                    合计：<span>{sum}</span>
                </p>
                <button>结算</button>
            </div>
        </div>
        )
    }
    componentDidMount(){
        this.props.carData()
    }
    changeall(e){
        this.props.checkAll(e.target.checked)
    }
}
const mapState = ({carData})=>{
    console.log('carData...',carData)
    let {list,checkAll,sum} = carData
    return {
        list,
        checkAlls:checkAll,
        sum
    }
}
const mapDispatch = (dispatch)=>{
    return {
        carData(){
            dispatch({
                type:'CAR_DATA',
                data:data.list
            })
        },
        checkAll(status){
            dispatch({
                type:'CHANGE_ALL',
                status
            })
        }
    }
}
export default connect(mapState,mapDispatch,null,{pure:false})(App);
