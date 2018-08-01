import React from 'react';
import data from '../data/data.json';
import '../scss/style.css';
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            list:data.list,
            count:0
        }
        this.native = this.native.bind(this);
    }
    render(){
        return (
            <div className="wrap">
                <div className="nav">
                    <Nav list={this.state.list} native={this.native} count={this.state.count}/>
                </div>
                <section>
                    <div className="scroll">
                        <List list={this.state.list} count={this.state.count}/>
                    </div>
                </section>
            </div>
        )
    }
    native(index){
        this.setState({count:index});    
    }
}
class Nav extends React.Component{
    render(){
        let {native,list,count} = this.props;
        return (
            <ul>
                {
                    list.map((item,index)=>{
                        return  <li className={count === index?'active':''} onClick={()=>{native(index)}} key={index}>{item.tit}</li>
                    })
                } 
            </ul>
        )
    }
}
class List extends React.Component{
    render(){
        let {count,list} = this.props;
        return (
            <div className="scroll">
                {
                    list[count].detail.map((val,ind)=>{
                        return <li key={ind}>
                            <img src={val.img}/>
                            <h3>{val.title}</h3>
                        </li>
                    })
                }
            </div>
        )
    }
}
export default App;