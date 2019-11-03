import React, { Component } from 'react';

// define the class
class Container extends Component {

  // main render method
  render() {
    return (
      <div className="Container">
        {this.props.children}
      </div>
    )
  }
}

export default Container;