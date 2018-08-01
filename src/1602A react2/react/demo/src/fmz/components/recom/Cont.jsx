import React, { Component } from 'react'

export default class Cont extends Component {
  render() {
    let {item} = this.props;
    return (
      <div className="contbox">
        <div className="tit">
            <h3 style={{WebkitBoxOrient:'vertical'}}>{item.title}</h3>
            <p>
                <img src={item.img} alt=""/>
                <span>{item.names}</span>
            </p>
        </div>
        <img src={item.img} alt=""/>
      </div>
    )
  }
}
