import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let {item} = this.props;
    return (
      <div className="list">
        <h3>
          <span>【{item.types}】</span>
          <span>{item.status}</span>
        </h3>
        <p>
          <span>{item.content}</span>
          <span>{item.func}</span>
        </p>
      </div>
    )
  }
}
