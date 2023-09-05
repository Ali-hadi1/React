import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'LearningReact'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Learning React Is Good!"
            })
        }, 3000)
    }
    render() {
        return (
        <div>
            <span>this the parent component!!</span>
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
        </div>
        )
    }
}

export default ParentComp;