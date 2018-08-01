import {combineReducers} from 'redux';
const getList = (state={},action)=>{
    if(action.type === 'GET_LIST'){
        state = action.data
    }
    return state
}
const getNames = (state='GC-高铁/城际',action)=>{
    if(action.type === 'GET_NAMES'){
        state = action.names
    }
    return state
}
export default combineReducers({
    getList,
    getNames
})