import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let {data} = this.props;
    return (
      <div className="list">
        {
            data.map((item,index)=>{
                return <p key={index}>{item.title}</p>
            })
        }
      </div>
    )
  }
}
