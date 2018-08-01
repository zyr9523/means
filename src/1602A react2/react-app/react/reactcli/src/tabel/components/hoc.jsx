import React,{Component,Fragment} from 'react';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

export default function hoc(Table){
    return class extends Component{
        constructor(){
            super();
            this.state = {
                list:[]
            }
            this.pageChange = this.pageChange.bind(this)
        }
        render(){
            let {data} = this.props;
            return (
                <Fragment>
                    <Table data={this.state.list}/>
                    <Pagination total={data.list.length} onChange={this.pageChange}/>
                </Fragment>
            )
        }
        componentDidMount(){
            this.pageChange(1,10);
        }
        pageChange(page,pageSize){
            console.log(page,pageSize);
            let {data} = this.props;
            this.setState({
                list:data.list.slice((page-1)*pageSize,page*pageSize)
            })
        }
    }
}