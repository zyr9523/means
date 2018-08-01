import {combineReducers} from 'redux';
const getData = (state=[],action)=>{
    if(action.type === 'GET_PERSON'){
        state = action.data
    }
    return state;
}
const getList = (state=[],action)=>{
    if(action.type === 'GET_LIST'){
        state = action.data
    }
    return state;
}
const selecType= (state='机构',action)=>{
    if(action.type === 'SELEC_TYPE'){
        console.log(action.text)
        state = action.text
    }
    return state;
}
const selecItem= (state='民间股神',action)=>{
    if(action.type === 'SELECT_ITEM'){
        console.log(action.text)
        state = action.text
    }
    return state;
}
const bannerdata= (state=[],action)=>{
    if(action.type === 'BANNER_DATA'){
        state = action.data
    }
    return state;
}
export default combineReducers({
    getData,
    getList,
    selecType,
    selecItem,
    bannerdata
})