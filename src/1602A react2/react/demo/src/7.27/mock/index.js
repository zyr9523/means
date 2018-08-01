import mockjs,{Random} from 'mockjs';
Random.extend({
    names:()=>Random.pick(['泰国榴莲冻肉450*1盒','越南火龙果mini*1盒','四川金奇异果90g-100g*4个','迷你赣南橙子*1盒'])
})
let data = mockjs.mock({
    'list|5':[
        {
            'id':()=>Random.increment(),
            'img_path':()=>Random.image('100x100',Random.color()),
            'names':'@names',
            'num':0,
            'price':9.9,
            'isShow':false
        }
    ]
});
export default data;