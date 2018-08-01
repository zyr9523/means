import React,{Component} from 'react';
import PropTypes from 'prop-types';

class M{
    constructor(){
        this.name = 'MM'
    }
    say(){
        console.log(this.name)
    }
}
let m = new M();
class Prop extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div className="box">
                <Button val="确定" num={5} ele={[4,5,6]}/>
            </div>
        )
    }
}
class Button extends Component{
    render(){
        let {val,num,ele} = this.props;
        return (
            <div>
                <button>{val}</button>
                <p>{num}</p>
                <div>{ele}</div>
            </div>
        )
    }
}
//PropTypes.node 任何类型
//PropTypes.instanceOf(Array).isRequired
//PropTypes.oneOf(['sss','ddd'])
//PropTypes.oneOftype([PropTypes.func,PropTypes.number])
//PropTypes.arrayOf(PropTypes.string)字符串类型的数组
//PropTypes.shape({}) 一个特定的对象
Button.propTypes = {
    val:PropTypes.string,
    // num:PropTypes.number,
    // num:PropTypes.oneOf(['a','b']),
    num:PropTypes.oneOfType([PropTypes.func,PropTypes.number]),
    ele:PropTypes.instanceOf(Object)
}
export default Prop;