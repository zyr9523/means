import React,{Component} from 'react';
import './scss/style.css';
import data from './data/data.json';
import List from './components/List';
class App extends Component{
    constructor(){
        super();
        this.state = {
            data:data.list,
            subtotal:0,
            shipping:100,
            total:0
        }
        console.log(this.state.data);
        this.addClick = this.addClick.bind(this);
    }
    render(){
        let {data,subtotal,shipping,total} = this.state;
        return (
            <div className="wrap">
                <div className="header">
                    Cart
                </div>
                <section>
                    <div className="scroll">
                        <List data={data} addClick={this.addClick}/>
                    </div>
                </section>
                <div className="footer">
                    <div className="compute">
                        <p><span>Subtotal小计</span><span>{subtotal}$</span></p>
                        <p><span>Shipping运费</span><span>{shipping}$</span></p>
                        <p><span>Total总计</span><span>{total}$</span></p>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        )
    }
    addClick(type,index){
        let {data,subtotal,shipping,total} = this.state;
        let num = 0;
        if(type === '+'){
            ++data[index].count;
            console.log(data[index].count);
            data.forEach((val)=>{
                num += val.count
            });
            subtotal = num*parseInt(data[index].price);
            total = subtotal + shipping;
            this.setState({
                data,
                subtotal,
                total
            })
        }else{
            --data[index].count;
            if(data[index].count <= 0){
                data[index].count = 0;
                total = 0;
            }
            console.log(data[index].count);
            data.forEach((val)=>{
                num += val.count
            });
            subtotal = num*parseInt(data[index].price);
            total = subtotal + shipping;
            if(num <= 0){
                total = 0;
            }
            this.setState({
                data,
                subtotal,
                total
            })
        }
    }
}
export default App;