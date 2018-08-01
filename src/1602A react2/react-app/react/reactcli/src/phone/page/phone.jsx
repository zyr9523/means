import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Phone extends Component {
    constructor(props,context){
        super(props);
        let data = context.router.route.location.data;
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
        let {data:{number}} = this.state;
        return (
            <div>
                {number}
            </div>
        )
    }
}
Phone.contextTypes = {
    router:PropTypes.object.isRequired
} 
export default Phone;