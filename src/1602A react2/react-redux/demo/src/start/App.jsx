import React, { Component } from 'react';
import './scss/style.css';
export default class App extends Component {
    constructor(){
        super();
        this.state = {
            count:-1,
            num:-1
        }
    }
    render() {
        let {count} = this.state;
        return (
        <div className="wrap">
            <div className="box">
                {this.viewStart()}
            </div>
            <p>评分是：{count+1}</p>
        </div>
        )
    }
    viewStart(){
        let {num} = this.state;
        let arr = [];
        for(let i=0;i<5;i++){
            arr.push(<span key={i} className={num>=i?'active':''} onMouseEnter={this.hover.bind(this,i)} onClick={this.click.bind(this,i)} ></span>)
        }
        return arr;
    }
    hover(index){
        let {num} = this.state;
        this.setState({
            num:index
        })
    }
    click(index){
        this.setState({
            count:index
        })
    }
}
