import {combineReducers} from 'redux';
const valuefn = (state={
    list:[]
},action)=>{
    switch(action.type){
        case 'ADD_TEXT':
            state.list.push(action.data)
            return {...state}
        case 'SELECT_ALL':
            state.list.map((item)=>{
                return item.isFinished = action.all
            })
            return {...state};
        case 'SELECT_ONE':
            state.list.map((item,index)=>{
                if(index === action.data.id){
                    item.isFinished = action.data.checked
                }
            })
            return {...state};
        case 'DELETE_TODO':
            state.list.splice(action.id,1);
            return {...state};
        case 'DELE_ALL':
            state.list = state.list.filter((item)=>{
                return !item.isFinished 
            })
            console.log('state.list...',state.list)
            return {...state}
        default:
            return state;
    }
}
const cat = (state='all',action)=>{
    if(action.type === 'FILTER_ITEM'){
        return action.status
    }
    return state
}
const reducer = combineReducers({
    valuefn,
    cat
});
export default reducer;