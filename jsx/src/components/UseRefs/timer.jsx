import { useState } from 'react'

export default function Timer() {
    const [count, Setcount] = useState(0)

    function handleClick() {
        Setcount(count + 1)
    }

    function handleClicks() {
        const newCount = count - 1;

        if (newCount < 0) {
            alert('Count is less than 0');
            return
        }

        Setcount(newCount)
    }

    function handleReset() {
        Setcount(0)
    }

    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={handleClick}>
                Increment
            </button>
            <button
                onClick={handleClicks}>
                Decrement
            </button>
            <button
                onClick={handleReset}>
                Reset
            </button>
        </>
    )
}