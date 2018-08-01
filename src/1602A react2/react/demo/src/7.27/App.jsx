import React, { Component } from 'react';
import './scss/style.css';
import {connect} from 'react-redux';
import data from './mock';
import List from './components/List';
console.log(data)

class App extends Component {
    render() {
        let {list} = this.props;
        return (
        <div className="wrap">
            {
                list&&list.map(item=>{
                    return <List key={item.id} item={item}/>
                })
            }
        </div>
        )
    }
    componentDidMount(){
        this.props.carData()
    }
}
const mapState = ({carData})=>{
    console.log('carData...',carData)
    let list = carData
    return {
        list
    }
}
const mapDispatch = (dispatch)=>{
    return {
        carData(){
            dispatch({
                type:'CAR_DATA',
                data:data.list
            })
        }
    }
}
export default connect(mapState,mapDispatch)(App);
