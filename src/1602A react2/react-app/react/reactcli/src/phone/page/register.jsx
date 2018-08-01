import React, { Component } from 'react';
import '../scss/_register.css';
import {
    Link
} from 'react-router-dom';
class Register extends Component {
    constructor(){
        super();
        this.state = {
            list:['15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654','15135963221','18404983275','16652347894','15135966654']
        }
    }
    render() {
        let {list} = this.state;
        return (
            <div className="register">
                <div className="scroll">
                    {
                        list.map((item,index)=>{
                            return <Link to={{
                                pathname:'/selectPhone',
                                data:{number:item}
                            }} key={index}>{item}</Link>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Register;
