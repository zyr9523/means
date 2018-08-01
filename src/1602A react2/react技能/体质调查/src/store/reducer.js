import {combineReducers} from 'redux';

function list(state=[],action){
    let arr=[...state]
    switch(action.id){
        case 1://输入
            arr=[...arr,action.payload]
        break;
        case 2://单选
            arr.map(v=>{
                if(v.text===action.payload.text){
                    v.ischeck=action.payload.ischeck
                }
            })
        break;
        case 3://删除单个
            arr=arr.filter(v=>{
                if(v.text!==action.payload){
                    return v;
                }
            })
        break;
        case 4://批量删除
            arr=arr.filter((v,i)=>{
                return !v.ischeck
            })
        break;
        case 5://全选
            arr.map(v=>{
                v.ischeck=action.payload;
            })
            console.log(arr);
        break;
    }
    return arr;
}

//把多个store合并成一个
let root=combineReducers({
    list
})

export default root;