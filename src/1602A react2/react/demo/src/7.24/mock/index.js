import mockjs,{Random} from 'mockjs';
let data = mockjs.mock({
    "list|50":[
        {
            "id":()=>Random.increment(),
            "names":()=>Random.name(),
            "text":()=>Random.csentence(),
            "age":()=>Random.integer(18,35),
            "city":()=>Random.city(true)
        }
    ]
});
export default data;