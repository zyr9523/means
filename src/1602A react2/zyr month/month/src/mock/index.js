import mockjs, { Random } from 'mockjs';
Random.extend({
    type: () => Random.pick(['未读', '已读']),
    status: () => Random.pick(['已回复', '未回复'])
})
let data = mockjs.mock({
    'list|10': [{
        'id': () => Random.increment(),
        'tit': () => Random.csentence(),
        'money': () => Random.integer(0, 20),
        'name': '@name',
        'title': '@title',
        'type': '@type',
        'status': '@status',
        'isShow': false
    }]
});
export default data;