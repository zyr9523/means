import React, { Component } from 'react'

export default class queslist extends Component {
  render() {
    let {item} = this.props;
    return (
        <div className="newlist">
            <h3 style={{WebkitBoxOrient:'vertical'}}>{item.title}</h3>
            <div className="tit">
                <p>
                    <img src={item.img} alt=""/>
                    <span>{item.names}</span>
                </p>
            </div>
        </div>
    )
  }
}
