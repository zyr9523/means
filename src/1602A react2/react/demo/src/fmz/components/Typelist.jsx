import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Typelist extends Component {
  render() {
    let {list} = this.props;
    return (
      <ul>
        {
            list&&list.map((item,index)=>{
                return <li key={index} onClick={this.filter.bind(this,item)}>{item}</li>
            })
        }
      </ul>
    )
  }
  filter(item){
    this.props.dispatch({
      type:'SELECT_ITEM',
      text:item
    })
  }
}
export default connect()(Typelist);

