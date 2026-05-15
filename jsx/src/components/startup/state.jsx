import { useState } from 'react';

export default function FeedbackForm1() {
    const [name, setName] = useState('');

    function handleClick() {
        const inputName = prompt('What is your name?');
        setName(inputName);
    }

    return (
        <>
            <button onClick={handleClick}>
                Greet
            </button>

            <h1>Hello, {name}!</h1>
        </>
    );
}