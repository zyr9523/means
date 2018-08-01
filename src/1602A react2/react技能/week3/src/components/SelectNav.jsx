import React, { Component } from 'react';
import {connect} from 'react-redux';

class SelectNav extends Component {
  render() {
    //   console.log('selectList..',this.props.selectList);
      let {selectList,click} = this.props;
    return (
      <div className="selectNav">车次类型 ： 
        {
            selectList&&selectList.map((item,index)=>{
                return <p key={index}>
                    <input type="checkbox"/>
                    <span key={index} onClick={()=>click(item)}>{item}</span>
                </p>
            })
        }
      </div>
    )
  }
}

const mapDispatch = (dispatch)=>{
    return {
        click(item){
            dispatch({
                type:'GET_NAMES',
                names:item
            })
        }
    }
}
export default connect(null,mapDispatch)(SelectNav);
