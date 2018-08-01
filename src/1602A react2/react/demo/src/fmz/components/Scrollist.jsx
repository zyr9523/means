import React, { Component } from 'react'

export default class Scrollist extends Component {
  render() {
    let {person} = this.props;
    return (
        <div className="person">
            <ul>
            {
                person&&person.map((item,index)=>{
                return <li key={index}>
                    <img src={item.img} alt=""/>
                    <h3>{item.names}</h3>
                    <span>{item.recom}</span>
                </li>
                })
            }
            </ul>
        </div>
    )
  }
}
