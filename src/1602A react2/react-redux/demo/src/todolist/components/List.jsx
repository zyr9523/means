import React, { Component } from 'react';
import {connect} from 'react-redux';
 class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            check:this.props.item.isFinished
        }
    }
    render() {
        let {item,remove,id} = this.props;
        return (
            <li className={item.isFinished?'done':''}>
                <input type="checkbox" checked={this.state.check} onChange={this.checkfn}/> 
                <p>{item.todo}</p> 
                <span onClick={()=>remove(id)}>x</span> 
            </li>
        )
    }
    checkfn=(e)=>{
        this.setState({
            check:e.target.checked
        });
        this.props.select(e.target.checked,this.props.id);
    }
}
const mapState = (valuefn)=>{
    return {
        valuefn
    }
}
const mapDispatch = (dispatch)=>{
    return {
        select(status,id){
            dispatch({
                type:'SELECT_ONE',
                data:{checked:status,id}
            })
        },
        remove:(id)=>{
            dispatch({
                type:'DELETE_TODO',
                id
            })
        }
    }
}
export default connect(mapState,mapDispatch)(List)
