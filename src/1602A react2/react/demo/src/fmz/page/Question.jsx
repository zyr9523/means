import React, { Component } from 'react';
import {connect} from 'react-redux';
import data from '../mock/banner';
import Quelist from '../components/ques/queslist';
import '../scss/ques/question.css';

 class Question extends Component {
  render() {
    let {bannerdata} = this.props;
    return (
      <div className="question">
        <div className="questab">
          {
            ['看问题','讨论'].map((item,index)=>{
              return <span key={index}>{item}</span>
            })
          }
        </div>
        <div className="qustionList">
          {
            bannerdata&&bannerdata.map((item,index)=>{
              return <Quelist item={item} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.getQustion()
  }
}
const mapState = ({bannerdata})=>{
  console.log(bannerdata)
  return {
    bannerdata
  }
}
const mapDispatch = (dispatch)=>{
  return {
    getQustion(){
      dispatch({
        type:'BANNER_DATA',
        data:data.banner
      })
    }
  }
}
export default connect(mapState,mapDispatch)(Question)
