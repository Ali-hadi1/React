import React, { Component } from 'react';

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe React Learning",
         sub: "Subscribed"
      }
    }
    ButtonChange = () => {
        this.setState({sub: 'Unsubscribe'})
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
            </div>
        )
    }
}

export default NewComp;