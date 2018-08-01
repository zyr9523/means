import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import addAction from '../store/addAction';             

 class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            ischeck:this.props.ischeck
        }
    }
    render() {
        let {fnChecked,fnRemove}=this;
        let {ischeck}=this.state;
        let {ischeck:active,text}=this.props;
        return (
            <React.Fragment>
                <li className={active?'active':''}>
                    <input type="checkbox" checked={active} onChange={fnChecked}/>
                    <p>{text}</p>
                    <span onClick={fnRemove}>x</span>
                </li> 
            </React.Fragment>
        );
    }
    fnChecked=(e)=>{
        //单选
        let ischeck=e.target.checked;
        this.setState({
            ischeck
        })
        this.props.dispatch(addAction({text:this.props.text,ischeck},2))
    }
    fnRemove=()=>{
        //删除单个
        this.props.dispatch(addAction(this.props.text,3))
    }
}
export default connect()(Item);