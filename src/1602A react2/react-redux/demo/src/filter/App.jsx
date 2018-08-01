import React, { Component } from 'react';
import {connect} from 'react-redux';
import './scss/style.css';
import Tab from './components/Tab';
import List from './components/List'

 class App extends Component {
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    render() { 
        let {dataView} = this.props;
        return (
        <div className="wrap">
            <Tab/>
            <div className="section">
                <div className="scroll">
                    {
                        dataView.map((item,index)=>{
                            return <List item={item} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
        )
    }
    componentDidMount(){
        this.props.sendData()
    }
}
const mapState = (({dataView,updateList,updateType})=>{
    let arr = [...dataView];
    console.log('arr...',arr,updateList)
    if(updateList === '全部状态' || updateType === '全部类型'){
        arr
    }else if(updateList !== '全部状态'){
        arr=arr.filter(item=>{
            return item.status === updateList
        })
    }
    return {
        dataView:arr
    }
});
const mapDispatch = ((dispatch)=>{
    return {
        sendData(){
            fetch('./data/data.json').then(res=>{
                res.json().then(body=>{
                    dispatch({
                        type:'SEND_DATA',
                        data:body.list
                    })
                })
            })
        }
    }
})
export default connect(mapState,mapDispatch)(App)
