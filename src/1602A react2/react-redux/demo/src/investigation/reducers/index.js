import {combineReducers} from 'redux';
const initData = (state={list:[]},action)=>{
    switch(action.type){
        case 'INIT_DATA':
            state.list = action.data;
            return {...state}
        default:
            return state
    }
}
const foodData = (state={},action)=>{
    switch(action.type){
        case 'FOOD_LIST':
            return state = action.data
        default:
            return state
    }
}
const foodList = (state='宜食',action)=>{
    if(action.type === 'NAME'){
        state = action.text
    }
    return state
}
export default combineReducers({
    initData,
    foodData,
    foodList
})