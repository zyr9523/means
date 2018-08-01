import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Check from '../components/Check';
import '../scss/fell/fell.css';

 class Fell extends Component {
  constructor(){
    super();
    this.state = {
      list:['没有','很少','有时','经常','总是']
    }
  }
  render() {
    let {initData} = this.props;
    let {list} = this.state;
    return (
      <div className="fell">
        <div className="box">
          <div className="list">
            <ul>
              {
                initData.map((item,index)=>{
                  return <li key={index}>
                    <h3>{item.qName}</h3>
                    <Check list={list}/>
                  </li>
                })
              }
            </ul>
          </div>
          <Link to="/Constitution"></Link>
        </div>
      </div>
    )
  }
  componentDidMount(){
    fetch('./data/question.json').then(res=>{
      res.json().then(body=>{
        // console.log(body);
        this.props.dispatch({
          type:'INIT_DATA',
          data:body
        })
      })
    })
  }
}
const mapState = ({initData})=>{
  console.log('state...',initData)
  return {
    initData:initData.list
  }
}
export default connect(mapState)(Fell);
