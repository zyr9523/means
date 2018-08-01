let mockjs = require('mockjs');
let { Random } = mockjs;
Random.extend({
    names: () => Random.pick(['泰国榴莲冻肉450*1盒', '越南火龙果mini*1盒', '四川金奇异果90g-100g*4个', '迷你赣南橙子*1盒'])
})
let data = mockjs.mock({
    'list|5': [{
        'id': () => Random.increment(),
        'img_path': () => Random.image('100x100', Random.color()),
        'names': '@names',
        'price': 9.9,
        'num': 0,
        'check': false,
        'isShow': false
    }]
});
module.exports = data;