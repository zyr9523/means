import React, { Component } from 'react';
import {connect} from 'react-redux';

class Tab extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    render() {
        let {count} = this.state;
        return (
        <div className="nav">
            {
                ['已回复','未回复'].map((item,index)=>{
                    return <span key={index} className={count === index?'active':''} onClick={this.clickTab.bind(this,item,index)}>{item}</span>
                })
            }
        </div>
        )
    }
    clickTab(item,index){
        this.setState({
            count:index
        });
        this.props.dispatch({
            type:'GET_TYPE',
            text:item
        })
    }
}
export default connect()(Tab);
