//The useref is commonly use when accessing the DOM elements.
//IT can be used to Remember the ID and references.

import { useRef } from 'react';

export default function useRefs() {
    let ref = useRef(0);    //Using ref we can store the initial value 0

    function handleClick() {
        ref.current = ref.current + 1; //Accessing the current value of ref and incrementing it by 1
        alert('You clicked' + ref.current + 'times'); //Displaying the current value of ref
    }
    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}