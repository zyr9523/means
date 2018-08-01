import React, { Component,Fragment} from 'react';
import {Link,Route} from 'react-router-dom';
import {connect} from 'react-redux';
 class List extends Component {
    render() {
        let {item} = this.props;
        return (
        <Fragment>
            {
                <Link to={{
                    pathname:'/detail',
                    data:item
                }} onClick={this.go.bind(this,item.type,item.id)}>
                    <div>
                        {
                            item.type === '未读'?<span>{item.type}</span>:null
                        }
                        <h3>{item.tit}</h3>
                    </div>
                    <p>
                        <span>￥{item.money}</span>
                        <span>{item.status}</span>
                    </p>
                </Link>
            }
        </Fragment>
        )
    }
    go(types,id){
        this.props.gofn(types,id)
    }
}
const mapDispatch = (dispatch)=>{
    return {
        gofn(types,id){
            dispatch({
                type:'SELECT_TYPE',
                status:{types,id}
            })
        }
    }
}
export default connect(null,mapDispatch)(List);
