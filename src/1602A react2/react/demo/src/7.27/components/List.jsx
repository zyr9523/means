import React, { Component } from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render() {
        let {item} = this.props;
        return (
        <div className="cart"> 
            <input type="checkbox"/>
            <div className="img">
                <img src={item.img_path} alt=""/>
            </div>
            <div className="tit">
                <h3>{item.names}</h3>
                <span>￥{item.price}</span>
            </div>
            <div>
                <span>-</span>
                <span>{item.num}</span>
                <span>+</span>
            </div>
        </div>
        )
    }
}
export default List
