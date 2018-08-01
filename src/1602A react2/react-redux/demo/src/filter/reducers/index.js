import {combineReducers} from 'redux';
const dataView = (state = [],action)=>{
    if(action.type === 'SEND_DATA'){
        return action.data;
    }
    return state
}
const updateList = (state='全部状态',action)=>{
    if(action.type === 'UPDATE_LIST'){
        return action.item
    }
    return state
}

const reducer = combineReducers({
    dataView,
    updateList
});
export default reducer