import React, { Component } from 'react'
import {Table} from 'antd';
export default class Tables extends Component {
  constructor(){
    super();
    this.state = {
      columns:[{
        title: 'Id',
        dataIndex: 'id',
      }, {
        title: 'Names',
        dataIndex: 'names',
      }, {
        title: 'Text',
        dataIndex: 'text',
      }, {
        title: 'Age',
        dataIndex: 'age',
      }, {
        title: 'City',
        dataIndex: 'city',
      }]
    }
  }
  render() {
    let {list} = this.props;
    let {columns} = this.state;
      console.log(list)
      return (
        <Table columns={columns} dataSource={list} rowKey="uid"/>
      )
    }
  }
{/* <table>
        <thead>
          <tr>
            <td>id</td>
            <td>names</td>
            <td>text</td>
            <td>age</td>
            <td>city</td>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item,index)=>{
              return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.names}</td>
                <td>{item.text}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            })
          }
        </tbody>
      </table> */}
