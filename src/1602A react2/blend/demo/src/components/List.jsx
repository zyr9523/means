import React, { Component } from 'react';
import {connect} from 'react-redux';

class List extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {item,addClick} = this.props;
        return (
        <div className="cart"> 
            <input type="checkbox" checked={item.check} onChange={(e)=>this.change(e,item)}/>
            <div className="img">
                <img src={item.img_path} alt=""/>
            </div>
            <div className="tit">
                <h3>{item.names}</h3>
                <span>￥{item.price}</span>
            </div>
            <div>
                <span onClick={()=>addClick('-',item)}>-</span>
                <span>{item.num}</span>
                <span onClick={()=>addClick('+',item)}>+</span>
            </div>
        </div>
        )
    }
    change(e,item){
        this.props.changeCheck(e.target.checked,item)
    }
}

const mapDispatch = (dispatch)=>{
    return {
        addClick(type,item){
            dispatch({
                type:'NUM_CHANGE',
                text:{type,item}
            })
        },
        changeCheck(check,item){
            dispatch({
                type:'CHENG_CHECK',
                text:{check,item}
            })
        }
    }
}
export default connect(null,mapDispatch,null,{pure:false})(List)
