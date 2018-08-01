import React, { Component } from 'react'
import {connect} from 'react-redux';

class List extends Component {
    render() {
        let {setData,remove} = this.props;
        return (
            <div>
                {
                    setData&&setData.map((item,index)=>{
                        return <div key={index}>
                            <span>姓名是：{item.username}</span>
                            <span>密码是{item.password}</span>
                            <span onClick={()=>remove(item)}>x</span>
                        </div>
                    })
                }
                <button onClick={this.back.bind(this)}>back</button>
            </div>
        )
    }
    back(){
        this.props.history.goBack();
    }
}
const mapState = ({setData})=>{
    console.log(setData)
    return {
        setData
    }
}
const mapDispatch = (dispatch)=>{
    return {
        remove(item){
            dispatch({
                type:'REMOVE_VALUE',
                text:item
            })
        }
    }
}
export default connect(mapState,mapDispatch)(List);