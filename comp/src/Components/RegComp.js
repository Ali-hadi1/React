import React, { Component } from 'react';

export class RegComp extends Component {
  render() {
    return (
      <div>
        <span>this is a regular component {this.props.name}!</span>
      </div>
    )
  }
}

export default RegComp;