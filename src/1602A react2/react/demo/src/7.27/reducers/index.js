import {combineReducers} from 'redux';
const carData = (state=[],action)=>{
    if(action.type === 'CAR_DATA'){
        let arr = [...state];
        arr = action.data;
        return arr
    }
    return state
}
export default combineReducers({
    carData
})