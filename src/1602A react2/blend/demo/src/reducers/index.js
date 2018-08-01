import { combineReducers } from 'redux';
let initiData = {
    list: [],
    checkAll: false,
    sum: 0
}
const carData = (state = initiData, action) => {
    switch (action.type) {
        case 'CAR_DATA':
            initiData.list = action.data;
            return {...initiData };
        case 'NUM_CHANGE':
            console.log(action.text, initiData)
            let { item, type } = action.text
            if (type === '+') {
                item.num++;
                let count = 0;
                initiData.list.forEach(item => {
                    count += item.num;
                });
                initiData.sum = (item.price * count).toFixed(2);
            } else {
                item.num--;
                if (item.num <= 0) {
                    item.num = 0;
                    let count = 0;
                    initiData.list.forEach(item => {
                        count -= item.num;
                    });
                    initiData.sum = (item.price * count).toFixed(2);
                }
            }
            return {...initiData };
        case 'CHENG_CHECK': //单选
            let { check } = action.text;
            action.text.item.check = check;
            let n = true; //设置开关
            initiData.list.forEach(item => {
                if (!item.check) { //如果有一项数据不选中，开关为false
                    n = false
                }
            })
            n ? initiData.checkAll = true : initiData.checkAll = false;
            return {...initiData };
        case 'CHANGE_ALL': //全选
            console.log(action.status)
            initiData.list.forEach(item => {
                item.check = action.status
                initiData.checkAll = action.status
            })
            return {...initiData };
    }
    return state
}

export default combineReducers({
    carData
})