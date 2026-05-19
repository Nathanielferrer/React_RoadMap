import { useState } from 'react';
export default function Toggle() {
    const [display, setDisplay] = useState('Off')

    function HandleClick() {
        if (display === 'Off') {
            setDisplay('On')
        } else {
            setDisplay('Off')
        }
    }
    return (
        <button onClick={HandleClick}>{display} </button>
    );
}