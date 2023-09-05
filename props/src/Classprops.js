import React, { Component } from 'react';

export class Classprops extends Component {
    render() {
        return (
        <div>
            <span>Hello {this.props.name} from {this.props.place}! Welcome to ReactJS.</span>
            <p>{this.props.childern}</p>
        </div>
        )
    }
}

export default Classprops;