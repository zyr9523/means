import React, { Component } from 'react'

export default class Food extends Component {
  render() {
    let {list} = this.props;
    // console.log(list)
    return (
      <ul className="food">
        {
            list.map((item,index)=>{
                return <li key={index}>
                    <img src={item.img_path}/>
                    <h3>{item.introduce}</h3>
                </li>
            })
        }
      </ul>
    )
  }
}
