//Problem: The dot is not moving when the checkbox is checked.
//Solution: Add [canMove] to the dependency array to prevent it from not moving when the checkbox is checked.

import { useState, useEffect } from 'react';

export default function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canMove, setCanMove] = useState(true);

    useEffect(() => {
        function handleMove(e) {    //Add a condition to check if the checkbox is checked
            if (canMove) {  //This can be either true or false base if user checked or unchecked
                setPosition({ x: e.clientX, y: e.clientY });
            }
        }
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    }, [canMove]);

    return (
        <>
            <label>
                <input type="checkbox"
                    checked={canMove}
                    onChange={e => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />

            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }} />
        </>
    );
}
