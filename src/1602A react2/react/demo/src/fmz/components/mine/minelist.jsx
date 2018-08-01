import React, { Component } from 'react'

class Minelist extends Component {
  render() {
    let {item} = this.props;
    return (
      <div>
        {item}
      </div>
    )
  }
}
export default Minelist
