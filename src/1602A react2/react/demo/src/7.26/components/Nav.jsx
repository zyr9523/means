import React, { Component ,Fragment} from 'react';
import {connect} from 'react-redux';

 class Nav extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    render() {
        let {count} = this.state;
        return (
        <Fragment>
            {
                ['123元起','153元起'].map((item,index)=>{
                    return <span onClick={this.tab.bind(this,index,item)} className={count===index?'on':''} key={index}>{item}</span>
                })
            }
        </Fragment>
        )
    }
    tab(index,item){
        this.setState({
            count:index
        });
        this.props.dispatch({
            type:'GETTYPE',
            text:item
        })
    }
}
export default connect()(Nav)
