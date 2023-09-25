import React from "react"
import './App.css';
import boxes from "./boxes"
import Box from './components/Box'

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}