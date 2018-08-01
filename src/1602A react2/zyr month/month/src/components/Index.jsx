import React, { Component ,Fragment} from 'react';
import {connect} from 'react-redux';
import List from './List';
import Tab from './Tab';
import data from '../mock';
class Indexs extends Component {
    render() {
        let {list,match} = this.props;
        return (
        <Fragment>
            <Tab/>
            <div className="content">
                <div className="scroll">
                    <ul>
                    {
                        list&&list.map((item,index)=>{
                            return <List key={index} item={item} match={match}/>
                        })
                    }
                    </ul>
                </div>
            </div>
        </Fragment>
        )
    }
    componentDidMount(){
        this.props.senData();
    }
}
const mapState = ({getData,getType,getgo})=>{
    console.log('getType...',getData,getType,getgo)
    let arr = [];
    if(getData.list.list){
        arr = getData.list.list
        arr = arr.filter(item=>{
            return item.status === getType
        })
        if(getgo.types === '未读'){
            arr.forEach(item=>{
                if(item.id === getgo.id)
                item.type = '已读'
            })
        }
        console.log('arr...',arr)
    }
    
    return {
        list:arr
    }
}
const mapDispatch = (dispatch)=>{
    return {
        senData(){
            dispatch({
                type:'GET_DATA',
                text:data
            })
        }
    }
}
export default connect(mapState,mapDispatch)(Indexs);
