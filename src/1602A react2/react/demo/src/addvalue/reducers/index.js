import { combineReducers } from 'redux';
let initistate = JSON.parse(window.localStorage.getItem('newdata')) || [];
const setData = (state = initistate, action) => {
    switch (action.type) {
        case 'ADD_VALUE':
            let arr = [...state, action.text];
            let { username } = action.text;
            window.localStorage.setItem('newdata', JSON.stringify(arr))
            return arr;
        case 'REMOVE_VALUE':
            let newdata = [...state];
            newdata = newdata.filter(item => {
                return item.username !== action.text.username
            });
            window.localStorage.setItem('newdata', JSON.stringify(newdata))
            return newdata
    }
    return state
}
export default combineReducers({
    setData
})