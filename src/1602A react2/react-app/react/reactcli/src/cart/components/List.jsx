import React,{Component} from 'react';
class List extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    render(){
        let {data,addClick} = this.props;
        return (
            <ul>
                {
                    data.map((item,index)=>{
                        return (
                            <li key={index}>
                                <div className="img">
                                    <img src={item.image_path}/>
                                </div>
                                <div className="title">
                                    <h3>{item.names}</h3>
                                    <p>{item.details}</p>
                                    <span>{item.price}</span>
                                </div>
                                <div className="shop">
                                    <span onClick={()=>addClick('-',index)}>-</span>
                                    <span>{item.count}</span>
                                    <span onClick={()=>addClick('+',index)}>+</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default List;