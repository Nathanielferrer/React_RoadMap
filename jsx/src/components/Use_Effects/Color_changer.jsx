import { useState, useEffect } from 'react'

export default function ColorChanger() {
    const [color, setColor] = useState('white')

    useEffect(() => {
        document.title = `Current Color ${color}`  //This is to change the background color of the body when the color state changes.
    }, [color])                                       //This is to avoid the useEffect to run everytime the component renders.

    function changeColor() {
        setColor(c => c === 'white' ? 'black' : 'white')  //This is to change the color state.
    }

    return (
        <div style={{ backgroundColor: color, height: '100vh', padding: '20px' }}>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}