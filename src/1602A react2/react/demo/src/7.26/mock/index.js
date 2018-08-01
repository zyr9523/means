import mockjs,{Random} from 'mockjs';
Random.extend({
    type:(date)=>Random.pick(['123元起','153元起'])
})
let data = mockjs.mock({
    "list|10":[
        {
            "id":"@increment",
            "title":'@title',
            "type":'@type'
        }
    ]
});
export default data;