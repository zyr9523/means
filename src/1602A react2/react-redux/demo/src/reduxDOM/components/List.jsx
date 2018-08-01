import React, { Component } from 'react';
import store from '../store';

export default class List extends Component {
  render() {
    let {item} = this.props;
    let {newList} = store.getState();
    return (
      <div onClick={this.add.bind(this,item)} className={newList.indexOf(item)!==-1?'active':''}>
          {item}
      </div>
    )
  }
  add(item){
    store.dispatch({
        type:'ADD_ELE',
        text:item
    })
  }
}
