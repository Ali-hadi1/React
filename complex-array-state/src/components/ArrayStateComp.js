import React from 'react'

export default function ArrayStateComp() {
    const [thingsArray, setThingsArray] = React.useState(['thing 1', 'thing 2']);
    const addItem = () => {
        setThingsArray(prevthingsArray => {
            return [...prevthingsArray, `thing ${prevthingsArray.length + 1}`]
        })
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div>
            <button onClick={addItem}>Add Items</button>
            {thingsElements}
        </div>
    )
}
