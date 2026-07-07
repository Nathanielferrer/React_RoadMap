import SearchButton from './searchButton.js';
import SearchInput from './searchInput.js';
import { useRef } from 'react' //Importing the useRef hook from the react library

export default function Page() {
    const inputRef = useRef(null)   //Creating a ref for the input element

    return (
        <>
            <nav>
                <SearchButton onClick={() => {  //make a props function that will later call in the SearchButton component using props
                    inputRef.current.focus()  //Focus on the input element
                }} />
            </nav>
            <SearchInput inputRef={inputRef} />  {/*Passing the ref to the SearchInput component*/}
        </>
    );
}
