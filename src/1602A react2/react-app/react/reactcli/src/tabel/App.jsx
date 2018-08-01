import React from 'react';
import Table from './components/table';
import hoc from './components/hoc';
import mockjs,{Random} from 'mockjs';
let data = mockjs.mock({
    "list|200":[{
        "id":()=>Random.increment(),
        "name":()=>Random.cname(),
        "content":()=>Random.csentence(),
        "age":()=>Random.integer(0,100)
    }]
});
let HocTable = hoc(Table)
class App extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div className="wrap">
                <HocTable data={data}/>
            </div>
        )
    }
}
export default App;