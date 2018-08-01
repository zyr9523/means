import { combineReducers } from 'redux';
let initiData = {
    list: []
}
const getData = (state = initiData, action) => {
    switch (action.type) {
        case 'GET_DATA':
            initiData.list = action.text;
            return {...initiData }
        default:
            return {...state }
    }
}
const getType = (state = '已回复', action) => {
    if (action.type === 'GET_TYPE') {
        state = action.text
    }
    return state;
}
const getgo = (state = {}, action) => {
    if (action.type === 'SELECT_TYPE') {
        state = action.status
    }
    return state;
}
export default combineReducers({
    getData,
    getType,
    getgo
})