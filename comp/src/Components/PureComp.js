import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    return (
      <div>
        <span>this is a pure component {this.props.name}!</span>
      </div>
    )
  }
}

export default PureComp;