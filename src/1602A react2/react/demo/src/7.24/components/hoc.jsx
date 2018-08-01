import React, { Component } from 'react';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

export default function Hoc(Table){
    return class extends Component{
        constructor(){
            super();
            this.state = {
                list:[]
            }
        }
        render(){
            let {data} = this.props;
            let {list} = this.state;
            return (
                <div>
                    <Table list={list}></Table>
                    <Pagination defaultCurrent={1} total={data.list.length} onChange={this.changepage.bind(this)}></Pagination>
                </div>
            )
        }
        componentDidMount(){
            this.changepage(1,10)
        }
        changepage(page,pagesize){
            console.log(page,pagesize)
            let {data} = this.props;
            this.setState({
                list:data.list.slice((page-1)*pagesize,page*pagesize)
            })
        }
    }
}
