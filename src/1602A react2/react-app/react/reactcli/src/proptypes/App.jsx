import React,{Component} from 'react';
import PropTypes from 'prop-types';
//1.创建一个组件必须接受一个数组，且该数组每一项必须只能是字符串
//2.创建一个组件必须结收一个对象，该对象的格式必须为{
//     name:'',
//     age:'',
//     hobby:[],//数组中每一项必须为字符串
//     other:{
//         goodAt:[], // 数组中每一项必须为字符串
//     }
// }
//3.创建一个组件可以接收一个函数或者对象，也可以不接收
//4.创建一个组件必须接受Hello 1602A Javascript React 998 这几个数据中的任意一个
//5.创建一个组件必须接收一个react元素
class Comp1 extends Component{
    render(){
        return (
            <div>创建一个组件必须接受一个数组，且该数组每一项必须只能是字符串</div>
        )
    }
}
Comp1.propTypes = {
     // 一个某种类型的数组
    arr:PropTypes.arrayOf(PropTypes.string)
}
class Comp2 extends Component{
    render(){
        return (
            <div>.创建一个组件必须结收一个对象</div>
        )
    }
}
Comp2.propTypes = {
    // 一个特定形式的对象
    obj:PropTypes.shape({
        name:PropTypes.string.isRequired,
        age:PropTypes.string.isRequired,
        hobby:PropTypes.arrayOf(PropTypes.string),//数组中每一项必须为字符串
        other:PropTypes.shape({
            goodAt:PropTypes.arrayOf(PropTypes.string), // 数组中每一项必须为字符串
        })
    })
}
class Comp3 extends Component{
    render(){
        return (
            <div>.创建一个组件可以接收一个函数或者对象，也可以不接收</div>
        )
    }
}
Comp3.propTypes = {
     // 一个对象可以是多种类型其中之一
    func:PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ])
}
class Comp4 extends Component{
    render(){
        return (
            <div>我是Comp4</div>
        )
    }
}
Comp4.propTypes = {
    //你可以声明 prop 是特定的值，类似于枚举
    val:PropTypes.oneOf(['Hello','1602A','Javascript','React','998' ])
}
class Comp5 extends Component{
    render(){
        let {children} = this.props;
        return (
            <div>.创建一个组件必须接收一个react元素
                {children}
            </div>
        )
    }
}
Comp5.propTypes = {
    //你可以声明 prop 是特定的值，类似于枚举
    children:PropTypes.element.isRequired
}
class App extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <Comp1 arr={['aaa','bbbb','ccc']}/>
                <Comp2/>
                <Comp3/>
                <Comp4/>
                <Comp5 children={<Comp4/>}/>
            </div>
        )
    }
}
export default App;