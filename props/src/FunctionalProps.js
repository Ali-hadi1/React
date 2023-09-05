import React from 'react';

function Functionalprops(props){
    return (
        <div>
            <h3>this is a Functional Component</h3>
            <p>Hello {props.name} from {props.place}</p>
        </div>
    )
}

export default Functionalprops;