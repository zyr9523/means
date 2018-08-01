import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Detail extends Component {
    constructor(props,context){
        super(props);
        let data = context.router.route.location.data;
        if(data&&Object.keys(data).length){
            window.localStorage.setItem('data',JSON.stringify(data))
        }else{
            data = JSON.parse(window.localStorage.getItem('data'))
        }
        this.state = {
            data
        }
    }
    render() {
        console.log(this.props)
        let {data} = this.state;
        // console.log(data)
        return (
        <div>
            {
                <div>
                    <h3>{data.tit}</h3>
                    <span>{data.name}</span>
                    <p>{data.title}</p>
                </div>
            }
        </div>
        )
    }
}
Detail.contextTypes = {
    router:PropTypes.object.isRequired
}
