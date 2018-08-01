import React from 'react';
import '../scss/style.css';
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            types:['alert','confirm','prompt'],
            type:''
        }
    }
    render(){
        let {types,type} = this.state;
        return (
            <div className="wrap">
                {
                    types.map((item,index)=>{
                        return <div key={index} onClick={()=>{this.click(item)}}>我是{item}弹框</div>
                    })
                }
               <Dialog type={type}/>
            </div>
        )
    }
    click(type){
        if(type === 'alert'){
            this.setState({type})
        }else if(type === 'confirm'){
            this.setState({type})
        }else{
            this.setState({type})
        }
    }
}
class Dialog extends React.Component{
    constructor(){
        super();
        this.state = {
            isShow:true
        }
    }
    render(){
        let {type} = this.props;
        let {isShow} = this.state;
        console.log(type)
        return (
            <div>
                {
                    type === 'alert'&&isShow?<div className="mask" onClick={this.remove.bind(this)}>alert</div>:type==='confirm'&&isShow?<div className="mask" onClick={this.remove.bind(this)}>confirm</div>:type==='prompt'&&isShow?<div className="mask" onClick={this.remove.bind(this)}>prompt</div>:null
                }
            </div>
        )
    }
    componentWillReceiveProps(){
        this.setState({
            isShow:true
        })
    }
    remove(){
        this.setState({
            isShow:false
        })
    }
}
export default App;