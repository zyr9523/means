import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ContList extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    render() {
        let {data} = this.state;
        return (
        <div className="section">
            <div className="scroll">
                <ul>
                    {
                        data.map((item,index)=>{
                            return <Link key={index} to={{
                                pathname:'/detail',
                                data:{id:item.id,list:item}
                            }}>
                                <div className="img">
                                    <img src={item.image_path} />
                                </div>
                                <div className="titlt">
                                    <h3>{item.details}</h3>
                                    <span>{item.price}</span>
                                </div>
                            </Link>
                        })
                    }
                </ul>
                
            </div>
        </div>
        )
    }
    componentDidMount(){
        fetch('https://www.easy-mock.com/mock/5af661927138d57c901e9172/example/milk').then(res=>{
            res.json().then(body=>{
                console.log(body)
                this.setState({
                    data:body.data
                })
            })
        })
    }
}
