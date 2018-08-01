import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let {item} = this.props;
    return (
        <li title={item.type}>
            <img src={item.img} alt=""/>
            <div className="tit">
            <h3>{item.names}</h3>
            <span>{item.title}</span>
            </div>
        </li>
    )
  }
}
