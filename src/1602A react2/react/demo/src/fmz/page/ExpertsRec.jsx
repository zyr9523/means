import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
class ExpertsRec extends Component {
  render() {
    let {person} = this.props;
    return (
      <div className="expertsRec">
        <div className="recom">
          <div>
            <ul>
              {
                person&&person.map((item,index)=>{
                  return <List item={item} key={index}/>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapState = ({getData})=>{
    console.log(getData)
    return {
      person:getData
    }
}
export default connect(mapState)(ExpertsRec);
