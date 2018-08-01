import React, { Component } from 'react';

export default class Nav extends Component {
  render() {  
    let {navList} = this.props;
    return (
      <ul>
        {
            navList.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
      </ul>
    )
  }
}
