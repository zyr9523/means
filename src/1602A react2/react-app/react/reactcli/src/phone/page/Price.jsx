import React, { Component } from 'react'

export default class Price extends Component {
  render() {
    console.log(this.props.routeprops.location.data)
    let data = this.props.routeprops.location.data;
    return (
      <div className="price">
        <div className="btn">
            <a onClick={()=>this.complete()}>完成</a>
        </div>
      </div>
    )
  }
  complete(){
      console.log(this.props)
      this.props.routeprops.history.push('/message')
  }
}
