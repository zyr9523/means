import React, { Component } from 'react';
import mockjs,{Random} from 'mockjs';
let data = mockjs.mock({
  "list|20":[{
    "id":()=>Random.increment(),
    "content":()=>Random.csentence()
  }]
});
console.log(data)
export default class Homepage extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        Homepage
      </div>
    )
  }
  componentDidMount(){
    fetch('https://www.easy-mock.com/mock/5af661927138d57c901e9172/example/eleme').then(res=>{
      res.json().then(body=>{
        console.log(body)
      })
    })
  }
}
