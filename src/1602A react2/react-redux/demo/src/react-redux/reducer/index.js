import {combineReducers} from 'redux';
const checkFn = (state={newList:[]},action)=>{
    switch(action.type){
        case 'ADD_ELE':
            if(state.newList.indexOf(action.text) === -1){
                state.newList.push(action.text);
            }
            return {...state};
        case 'DEL_ELE':
            state.newList.splice(action.text,1);
            return {...state};
        case 'REMOVE_ALL':
            state.newList = [];
            return {...state}
        default:
            return state
    }
}
const checkboxFn = (state,action)=>{
    return 222
}
const combine = combineReducers({
    checkFn,
    checkboxFn
});
export default combine;