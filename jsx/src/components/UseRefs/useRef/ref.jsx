import { useRef } from 'react';

export default function Form() {
    const inputRef = useRef(null);    //Using ref to focus on the input field

    function handleClick() {          //After Clicked this function will run 
        inputRef.current.focus();      //Calling the focus() method on the input field
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>    {/* This will trigger the handleClick() function when the button is clicked */}
                Focus the input
            </button>
        </>
    );
}
