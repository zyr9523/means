import React, { Component } from 'react';
import '../scss/expert/expert.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import List from '../components/List';
import Typelist from '../components/Typelist';
import data from '../mock/index';
import Scrollist from '../components/Scrollist';

class Expert extends Component {
  constructor(){
    super();
    this.state = {
      isOn:0,
      isShow:false
    }
  }
  render() {
    let {isOn,isShow} = this.state;
    let {person,list,filter} = this.props;
    // console.log('list...',list)
    return (
      <div className="expert">
        {!isShow?<div className="recom">
          <Link to="/ExpertsRec">专家推荐</Link>
          <div>
            <ul>
              {
                person&&person.slice(0,3).map((item,index)=>{
                  return <List key={index} item={item}/>
                })
              }
            </ul>
          </div>
        </div>:null}
        {isShow?<Scrollist person={person}/>:null}
        <div className="hot">
            <h3>今日热门</h3>
            <div className="tab">
              {
                ['机构','风格','品种'].map((val,ind)=>{
                  return <span key={ind} className={isOn===ind?'on':''} onClick={this.tab.bind(this,ind,val)}>{val}</span>
                })
              }
            </div>
            {isShow?<Typelist list={list}/>:null}
        </div>
        <div className="more">
          <ul>
            {
              filter&&filter.map((item,index)=>{
                return <List key={index} item={item}/>
              })
            }
          </ul>
          {isShow?<div className="mark"></div>:null}
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.getPerson();
  }
  tab(ind,val){
    this.setState({
      isShow:true,
      isOn:ind
    });
    this.props.clickType(val)
  }
}
const mapState = ({getData,getList,selecType,selecItem})=>{
  console.log(selecType);
  
  let arr = [],filterdata = [],newlist = [];
  let list = getList;
  let strfilter = [],styfilter = [],typefilter = [], newfilter = []
  if(getList.length){
    newlist = list.filter(item=>{
      return item.type === selecType
    })[0].typeList
  }
  if(getData.length){
    arr = getData;
    filterdata = getData;
    filterdata.forEach((item)=>{
      if(item.structure === selecItem){
        strfilter.push(item);
        newfilter = strfilter
      }else if(item.style === selecItem){
        styfilter.push(item);
        newfilter = styfilter
      }else if(item.type === selecItem){
        typefilter.push(item);
        newfilter = typefilter
      }
    });
    // filterdata = filterdata.filter(item=>{
    //   return item[selecType] === selecItem
    // })
    console.log('filterdata...',newfilter)
  }
  return {
    person:arr,
    list:newlist,
    filter:newfilter
  }
}
const mapDispatch = (dispatch)=>{
  return {
    getPerson(){
      dispatch({
        type:'GET_PERSON',
        data:data.person
      });
      fetch('./data/list.json').then(res=>{res.json().then(body=>{
        dispatch({
          type:'GET_LIST',
          data:body.list
        })
      })})
    },
    clickType(val){
      dispatch({
        type:'SELEC_TYPE',
        text:val
      })
    }
  }
}
export default connect(mapState,mapDispatch)(Expert)
