import { useRef } from 'react'

export default function Page() {
    const inputRef = useRef(null)   //We add useRef for refrencing the elements

    function handleClick() {    //Make a function to focus on the input element by accessing the ref attribute
        inputRef.current.focus()
    }
    return (
        <>
            <nav>
                <button
                    onClick={handleClick} >    {/*Calling handleClick function on click*/}
                    Search
                </button>
            </nav>
            <input
                placeholder="Looking for something?"
                ref={inputRef}    //Ref attribute is used to access the DOM element such as input, h1, button, etc
            />
        </>
    );
}
