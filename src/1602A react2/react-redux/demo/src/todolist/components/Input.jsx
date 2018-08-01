import React, { Component } from 'react';
import {connect} from 'react-redux';

class Input extends Component {
    constructor(){
        super();
        this.state = {
            text:''
        }
    }
    render() {
        let {text} = this.state;
        return (
            <div className="text">
                <input type="text" value={text} onChange={(e)=>this.change(e)} onKeyDown={(e)=>this.keydown(e)} placeholder="请输入..."/>
            </div>
        )
    }
    change(e){
        this.setState({
            text:e.target.value
        })
    }
    keydown(e){
        if(e.keyCode === 13){
            if(!this.state.text){
                return
            }
            this.props.addToDo({
                todo:this.state.text,
                isFinished:false
            });
            this.setState({
                text:''
            })
        }
    }
}
const mapState = (valuefn)=>{
    // console.log(valuefn)
    return {
      valuefn
    }
  }
const mapDispatch = (dispatch)=>{
    return {
      addToDo(data){
        dispatch({
            type:'ADD_TEXT',
            data
        })
      }
    }
  }
export default connect(mapState,mapDispatch)(Input);
