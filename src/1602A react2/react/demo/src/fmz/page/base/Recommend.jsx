import React, { Component } from 'react';
import bandata from '../../mock/banner';
import Banner from '../../components/Swiper';
import {connect} from 'react-redux';
import Cont from '../../components/recom/Cont';
import Listnew from '../../components/recom/Listnew';
class Recommend extends Component {
  render() {
    let {bannerdata} = this.props;
    return (
      <div className="Recommend">
        <Banner bannerdata={bannerdata.slice(0,3)}/>
        <div className="cont">
          {
            bannerdata.slice(0,2).map((item,index)=>{
              return <Cont item={item} key={index}/>
            })
          }
        </div>
        <div className="contnew">
          {
            bannerdata.map((item,index)=>{
              return <Listnew item={item} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.getbandata()
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
    getbandata(){
      dispatch({
        type:'BANNER_DATA',
        data:bandata.banner
      })
    }
  }
}
export default connect(mapState,mapDispatch)(Recommend);
