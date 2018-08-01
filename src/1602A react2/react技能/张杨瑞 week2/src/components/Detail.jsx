import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
    constructor(props,context){
        super(props);
        let data = context.router.route.location.data;
        console.log(data)
        if(data && Object.keys(data).length){
            window.localStorage.setItem('data',JSON.stringify(data));
        }else{
            data = JSON.parse(window.localStorage.getItem('data'));
        }
        this.state = {
            data
        }
    }
    render() {
        if(!this.state.data){
            return null;
        }
        let {data} = this.state;
        return (
            <div className="detail">
                {
                    <div>
                        <img src={data.list.image_path}/>
                        <h3>{data.list.details}</h3>
                        <span>{data.list.price}</span>
                    </div>
                }
            </div>
        )
    }
}
Detail.contextTypes = {
    router:PropTypes.object.isRequired
}
export default Detail;
