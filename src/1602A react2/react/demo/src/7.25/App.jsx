import React, { Component } from 'react';
import './scss/style.css';
import Nav from './components/Nav';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            navList:['推荐','男装','女装','眼镜','配饰','婴童','鞋靴','运动','皮具','出行','个护','美妆','居家','厨具','家电','家装','家具','数码','汽配','定制'],
            isShow:false
        }
    }
    render() {
        let {navList,isShow} = this.state;
        return (
        <div className="wrap">
            <header>
                {!isShow?<Nav navList={navList}/>:<span>全部频道</span>}
                <div className="more" onClick={this.toggle.bind(this)}>更多</div>
            </header>
            {
                isShow?<div className="list">
                    <Nav navList={navList}/>
                </div>:null
            }
        </div>
        )
    }
    toggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
