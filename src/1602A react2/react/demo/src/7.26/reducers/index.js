import {combineReducers} from 'redux';
const gettype = (state='123元起',action)=>{
    if(action.type === 'GETTYPE'){
        state = action.text
    }
    return state;
}
export default combineReducers({
    gettype
})