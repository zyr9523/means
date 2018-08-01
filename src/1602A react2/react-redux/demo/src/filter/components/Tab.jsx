import React, { Component } from 'react';
import {connect} from 'react-redux';
class Tab extends Component {
    constructor(){
        super();
        this.state = {
            isShow:false,
            isType:false,
            stauList:['业务科室审核','局长签审','待办','归档','科室撤稿'],
            typeList:['请示流程','发文'],
            statu:'全部状态',
            type:'全部类型'
        }
    }
    render() {
        let {statu,type,isShow,isType,stauList,typeList} = this.state;
        return (
        <div className="nav">
            <div>
                <span onClick={this.click.bind(this,'statu')}>{statu}</span>
                {
                    isShow?<ul>{
                        stauList.map((item,index)=>{
                            return <li key={index} onClick={this.clickItem.bind(this,'statu',item)}>{item}</li>
                        })
                    }
                    </ul>:null
                }
            </div>
            <div>
                <span onClick={this.click.bind(this,'type')}>{type}</span>
                {
                    isType?<ul>
                        {
                            typeList.map((item,index)=>{
                                return <li key={index} onClick={this.clickItem.bind(this,'type',item)}>{item}</li>
                            })
                        }
                    </ul>:null
                }
            </div>
        </div>
        )
    }
    click(type){
        type === 'statu'?this.setState({isShow:!this.state.isShow,isType:false}):this.setState({isType:!this.state.isType,isShow:false});
    }
    clickItem(types,item){
        if(types === 'statu'){
            this.setState({
                statu:item,
                isShow:false
            });
            
            this.props.dispatch({
                type:'UPDATE_LIST',
                item
            })
        }else{
            this.setState({
                type:item,
                isType:false
            });
        }
        
        
    }
}
export default connect()(Tab);
