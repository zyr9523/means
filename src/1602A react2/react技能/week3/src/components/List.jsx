import React, { Component } from 'react';

export default class List extends Component {
  render() {
    let {navList,news} = this.props;
    // console.log(news)
    return (
      <div>
        <table>
          <thead>
            <tr>
              {
                navList&&navList.map((item,index)=>{
                  return <td key={index}>{item}</td>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              news&&news.map((val,ind)=>{
                return <tr key={ind}>
                  <td>{val.names}</td>
                  <td>{val.subway}</td>
                  <td>{val.times}</td>
                  <td>{val.sitDown}</td>
                  <td>{val.zhu}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
