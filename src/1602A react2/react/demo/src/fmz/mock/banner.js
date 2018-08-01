import mockjs,{Random} from 'mockjs';
Random.extend({
    titnav:(date)=>Random.pick(["精品推荐","财经视频","专家热文","数据研报"]),
})
let bandata = mockjs.mock({
    "banner|30":[{
        "id":'@increment',
        "names":'@cname',
        "title":()=>Random.cparagraph(),
        "img":()=>Random.image('200x100',Random.color()),
        "titnav":'@titnav',
        'activity':()=>Random.integer(0,1000),
        'isShow':'@isShow'
    }]
});

export default bandata;