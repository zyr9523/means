import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="##" onClick={this.back.bind(this)}>返回</a>
        <h3>{this.props.names}</h3>
        <a href="##">...</a>
      </div>
    )
  }
  back(){
      this.props.route.history.goBack();
  }
}
