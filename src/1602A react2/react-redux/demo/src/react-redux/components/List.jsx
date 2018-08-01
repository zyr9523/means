import React, { Component } from 'react';
import {connect} from 'react-redux';

class List extends Component {
  render() {
    let {item,check} = this.props;
    console.log(check)
    let {newList} = this.props.checkFn;
    return (
      <div onClick={()=>this.props.add(item)} className={newList.indexOf(item)!==-1?'active':''}>
          {item}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
      checkFn:state.checkFn
  }
}
const mapDispatchToprops = (dispatch)=>{
  return {
    add:(item)=>{
        dispatch({
          type:'ADD_ELE',
          text:item
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToprops)(List)