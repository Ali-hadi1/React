import React, { Component } from 'react';
import bell from '../images/bell.png';
import emptybell from '../images/bell_empty.png';

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe React Learning",
         sub: "Subscribe",
         imageURL: emptybell
      }
    }
    ButtonChange = () => {
        this.setState({
            sub: 'subscribed',
            message: 'Hit the bell icon never miss an update'
        })
    }
    ImageChange = () => {
        this.setState(
            {
                message: 'Enjoy From Learning React!',
                imageURL: bell
            }
        )
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <br />
                <br />
                {this.state.sub === 'subscribed' ? 
                    <img src={this.state.imageURL} style={{ width: '32px', height: '32px'}} alt="" onClick={this.ImageChange} /> : null }
            </div>
        )
    }
}

export default NewComp;