import mockjs,{Random} from 'mockjs';
let data = mockjs.mock({
    "list|20":[{
        "name":()=>Random.first(),
        "id":()=>Random.increment(),
        "city":()=>Random.province()
    }]
})
export default data;
