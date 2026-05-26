import { useRef } from 'react'

export default function Input() {
    const inputRef = useRef(null)   //passing a reference to the input element.

    function handleClick() {
        inputRef.current.focus()     //Focuses on the input element
    }
    return (
        <>
            <input ref={inputRef} />    {/*ref attribute is used to access the DOM element such as input, h1, button, etc*/}
            <button onClick={handleClick}>Focus</button>
        </>
    )
}