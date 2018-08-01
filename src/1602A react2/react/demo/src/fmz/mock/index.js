import mockjs,{Random} from 'mockjs';
Random.extend({
    structure:(date)=>Random.pick(["民间股神","公募基金","私募基金","证券公司","对冲基金"]),
    style:(date)=>Random.pick(["风格股神","风格基金","风格基金","风格公司","风格基金"]),
    type:(date)=>Random.pick(["品种股神","品种基金","品种基金","品种公司","品种基金"]),
    isShow:()=>Random.pick(false)

})
let data = mockjs.mock({
    "person|50":[{
        "id":'@increment',
        "names":'@cname',
        "title":'@ctitle',
        "img":()=>Random.image('200x100',Random.color()),
        "structure":'@structure',
        "style":'@style',
        "type":'@type',
        'activity':()=>Random.integer(0,1000),
        'isShow':'@isShow'
    }]
});

export default data;